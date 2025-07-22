import "./global.css";

import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { Routes } from './src/routes';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <Routes />
    </SafeAreaView>
  );
}
