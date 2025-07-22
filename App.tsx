import "./global.css";

import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ApolloContextProvider } from "./src/context/ApolloContext";

import Routes from './src/routes';

export default function App() {
  return (
    <>
      <StatusBar style="light" translucent />
      <ApolloContextProvider>
        <SafeAreaView className="flex-1 bg-gray-900">
          <Routes />
        </SafeAreaView>
      </ApolloContextProvider>
    </>
  );
}
