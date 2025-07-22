import "./global.css";

import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

import Routes from './src/routes';
import { View } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar style="light" translucent />
      <SafeAreaView className="flex-1 bg-gray-900">
        <Routes />
      </SafeAreaView>
    </>
  );
}
