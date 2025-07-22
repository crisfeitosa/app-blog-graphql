import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const AboutPost: React.FC = () => {
  const navigation = useNavigation();

  return (
    <ScrollView className="flex-1">
      <StatusBar barStyle="light-content" />
      <View className="relative">
        <View className="w-full aspect-video">
          <Image
            source={{
              uri: 'https://blog.rocketseat.com.br/content/images/size/w2000/2022/01/Rocketseat-jquery-historia.jpg',
            }}
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>
        
        {/* Back Button */}
        <View className="absolute bottom-0 left-0 bg-violet-500">
          <TouchableOpacity 
            className="flex-row items-center px-4 py-2"
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={32} color="#f9fafb" />
            <Text className="text-gray-50 ml-2">Voltar</Text>
          </TouchableOpacity>
        </View>
        
        {/* Tag */}
        <View className="absolute bottom-0 right-0 bg-violet-500 px-3 py-1.5">
          <Text className="text-gray-50 font-bold text-xs">TAG</Text>
        </View>
      </View>
      
      <View className="mt-4 px-4">
        <View>
          <Text className="text-2xl font-bold text-gray-900 mb-4">Title of post</Text>
        </View>
        
        <Text className="text-gray-700 mb-4 leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo non ea,
          debitis odit commodi saepe. Recusandae incidunt ducimus dolore,
          impedit temporibus necessitatibus quia! Cum possimus, similique
          deleniti sequi blanditiis aliquam.
        </Text>
        
        <Text className="text-gray-700 mb-4 leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo non ea,
          debitis odit commodi saepe. Recusandae incidunt ducimus dolore,
          impedit temporibus necessitatibus quia! Cum possimus, similique
          deleniti sequi blanditiis aliquam.
        </Text>
        
        <Text className="text-gray-700 mb-4 leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo non ea,
          debitis odit commodi saepe. Recusandae incidunt ducimus dolore,
          impedit temporibus necessitatibus quia! Cum possimus, similique
          deleniti sequi blanditiis aliquam.Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quo non ea, debitis odit commodi saepe.
          Recusandae incidunt ducimus dolore, impedit temporibus necessitatibus
          quia! Cum possimus, similique deleniti sequi blanditiis aliquam.
        </Text>
        
        <Text className="text-gray-700 mb-4 leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo non ea,
          debitis odit commodi saepe. Recusandae incidunt ducimus dolore,
          impedit temporibus necessitatibus quia! Cum possimus, similique
          deleniti sequi blanditiis aliquam.Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quo non ea, debitis odit commodi saepe.
          Recusandae incidunt ducimus dolore, impedit temporibus necessitatibus
          quia! Cum possimus, similique deleniti sequi blanditiis aliquam.
        </Text>
        
        <Text className="text-gray-700 mb-4 leading-6">
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