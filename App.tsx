import "./global.css";

import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { ApolloContextProvider } from "./src/context/ApolloContext";

import Routes from './src/routes';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#111827' }}>
        <StatusBar style="light" translucent />
        <ApolloContextProvider>
          <Routes />
        </ApolloContextProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
