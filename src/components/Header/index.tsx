import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface IHeader {
  onOpen: () => void;
}

const Header: React.FC<IHeader> = ({ onOpen }) => {
  return (
    <View className="flex-row justify-between items-center w-full mb-4">
      <Text className="text-3xl font-bold text-gray-100">News</Text>
      <View className="flex-1" />
      <TouchableOpacity 
        onPress={onOpen}
        className="p-2"
      >
        <Ionicons name="search" size={18} color="#86198f" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
