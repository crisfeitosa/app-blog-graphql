import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import "./global.css";

export default function App() {
  return (
    <View className="flex-1 bg-white items-center justify-center">
      <Text className="text-xl font-bold text-blue-600">Open up App.tsx to start working on your app!</Text>
      <Text className="text-base text-gray-500 m-4 text-center">Tailwind CSS está funcionando!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
