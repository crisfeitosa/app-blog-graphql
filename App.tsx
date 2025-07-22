import "./global.css";

import { StatusBar } from 'expo-status-bar';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { ApolloContextProvider } from "./src/context/ApolloContext";

import Routes from './src/routes';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" translucent />
      <ApolloContextProvider>
        <Routes />
      </ApolloContextProvider>
    </SafeAreaProvider>
  );
}
