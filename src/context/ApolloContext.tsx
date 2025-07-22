import React from 'react';

import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';

import {setContext} from '@apollo/client/link/context';

const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3NTMxOTgyNTIsImF1ZCI6WyJodHRwczovL2FwaS11cy13ZXN0LTIuaHlncmFwaC5jb20vdjIvY21kYXJ0NXIxMDd1NDA4dzZ5dDEzZ25yeS9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC11cy13ZXN0LTIuaHlncmFwaC5jb20vIiwic3ViIjoiZDI2NzI5ZjItODRiNS00YTg5LWE2NjgtN2Q4NjRhMGY2ZjNhIiwianRpIjoiY21kZW96MTNhMDNiMDA3bHE4cDM0YWtpNyJ9.Smjk05JLxTyoKsJYuPb5-lv4dl0iB7aiIZpnLzuKCyzUBut8BCt2_AjLX2Zbhp9Acn0NURHvXD4-LHeJFUTShoTt1ThT8JqO9POlEM2B_blgNciSmxfimfnI94PWTB6Bw-FTUODrwUMwlcpH-_4DnUBrQDG27_gumOM9LjsUOhjnQLqM0s4h9bmYuKQYGdoxYrrxgvNKPcZhosLoorw6Ytf4jQZvnFBIy1-pPR0y6wXMRv9MFrPwBompwLxtVRSW2aDTgN4oRR_ptRIokM2Ad05tMYJHM1VviqKDc9SVpSWcO842UX-GAydMxjM6SRZ5AM0CLqtqREbbzJwi-KDTilQYse4nwBn55TGqOy51cDlZSn5_UeMFohDlbK4cro_PhTionuXKd69fm69VTLCJOMawAe2xcn8h8IUcl5l2qIrjcMhb5wsBBtmyHTB4fX0JGSB2UktyInxfJSdEUX2IzcuyxXzE5JtKTL9hn7muSfrluRsVcJWDIaWdrcgryqKIEB7GUbLzgBXclkmyOrnfO2DJYh5EVQc7aMZvwOxLHSC0arXaIogWJQiMIytTPLdSBdRDtzfctXH0SWKd6P4VCQ742PnYPwKw69o3jl4WakJsa8IrKZXkXKB05rrz9mbAiJCDd_1KMB0Jsh8AwlqxHWipkehUjAoxMfjsHQDjZ88";

const httpLink = createHttpLink({
  uri: 'https://us-west-2.cdn.hygraph.com/content/cmdart5r107u408w6yt13gnry/master',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export const ApolloContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
