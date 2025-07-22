import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PostCard = () => {
  const navigation = useNavigation();

  const goToPost = () => {
    navigation.navigate('AboutPost' as never);
  };

  return (
    <View className="max-w-[460px] mx-auto rounded-lg overflow-hidden border border-violet-700 bg-slate-950 shadow-sm">
      <View className="relative">
        <View className="w-full aspect-video">
          <Image
            source={{
              uri: 'https://storage.googleapis.com/star-lab/blog/OGs/analise-de-dados-7-ferramentas.png',
            }}
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>
        <View className="absolute bottom-0 bg-violet-500 px-3 py-1.5 rounded-tr-md rounded-br-md">
          <Text className="text-gray-50 font-bold text-xs">TAG</Text>
        </View>
      </View>
      
      <View className="p-4 space-y-3">
        <View className="space-y-2">
          <Text className="text-lg font-semibold text-gray-100 -ml-0.5">
            The Garden City
          </Text>
        </View>
        
        <Text className="font-normal text-gray-200">
          Bengaluru (also called Bangalore) is the center of India's high-tech
          industry. The city is also known for its parks and nightlife.
        </Text>
        
        <View className="flex-row items-center justify-between space-x-4">
          <View className="flex-row items-center">
            <Text className="text-gray-400 font-normal">
              6 mins ago
            </Text>
          </View>
          <TouchableOpacity 
            onPress={goToPost}
            className="bg-emerald-500 px-4 py-2 rounded-md"
          >
            <Text className="text-white font-medium">Ver mais...</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PostCard;
