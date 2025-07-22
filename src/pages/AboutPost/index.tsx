import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const AboutPost: React.FC = () => {
  const navigation = useNavigation();

  return (
    <ScrollView className="flex-1 bg-gray-900">
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
        
        {/* Back Button */}
        <View className="absolute bottom-0 left-0 bg-violet-500 rounded-tr-md">
          <TouchableOpacity 
            className="flex-row items-center px-4 py-2"
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={28} color="#f9fafb" />
            <Text className="text-gray-50 ml-2 text-2xl font-bold">Voltar</Text>
          </TouchableOpacity>
        </View>
        
        {/* Tag */}
        <View className="absolute bottom-0 right-0 bg-violet-500 px-3 py-1.5 rounded-tl-md">
          <Text className="text-gray-50 font-bold text-xs">TAG</Text>
        </View>
      </View>
      
      <View className="mt-6 px-6 w-full gap-4">
        <View>
          <Text className="text-2xl font-bold text-gray-100 mb-4">Title of post</Text>
        </View>
        
        <Text className="text-gray-200 leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo non ea,
          debitis odit commodi saepe. Recusandae incidunt ducimus dolore,
          impedit temporibus necessitatibus quia! Cum possimus, similique
          deleniti sequi blanditiis aliquam.
        </Text>
        
        <Text className="text-gray-200 leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo non ea,
          debitis odit commodi saepe. Recusandae incidunt ducimus dolore,
          impedit temporibus necessitatibus quia! Cum possimus, similique
          deleniti sequi blanditiis aliquam.
        </Text>
        
        <Text className="text-gray-200 leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo non ea,
          debitis odit commodi saepe. Recusandae incidunt ducimus dolore,
          impedit temporibus necessitatibus quia! Cum possimus, similique
          deleniti sequi blanditiis aliquam.Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quo non ea, debitis odit commodi saepe.
          Recusandae incidunt ducimus dolore, impedit temporibus necessitatibus
          quia! Cum possimus, similique deleniti sequi blanditiis aliquam.
        </Text>
        
        <Text className="text-gray-200 leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo non ea,
          debitis odit commodi saepe. Recusandae incidunt ducimus dolore,
          impedit temporibus necessitatibus quia! Cum possimus, similique
          deleniti sequi blanditiis aliquam.Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quo non ea, debitis odit commodi saepe.
          Recusandae incidunt ducimus dolore, impedit temporibus necessitatibus
          quia! Cum possimus, similique deleniti sequi blanditiis aliquam.
        </Text>
        
        <Text className="text-gray-200 leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo non ea,
          debitis odit commodi saepe. Recusandae incidunt ducimus dolore,
          impedit temporibus necessitatibus quia! Cum possimus, similique
          deleniti sequi blanditiis aliquam.Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quo non ea, debitis odit commodi saepe.
          Recusandae incidunt ducimus dolore, impedit temporibus necessitatibus
          quia! Cum possimus, similique deleniti sequi blanditiis aliquam.
        </Text>
      </View>
    </ScrollView>
  );
};

export default AboutPost;