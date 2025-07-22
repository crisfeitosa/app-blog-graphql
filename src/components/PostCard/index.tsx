import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { CAREGORIES } from '../../utils/enums/categories';
import { stringToDate } from '../../helpers/date';
import { RootStackParamList } from '../../routes';

interface IPostItem {
  id: string;
  title: string;
  categorie: CAREGORIES;
  shortDescription: string;
  createdAt: string;
  description: string | object;
  coverUrl: string;
}

const PostCard = ({item}: {item: IPostItem}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const goToPost = () => {
    navigation.navigate('AboutPost', {
      postId: item.id,
    });
  };

  return (
    <View className="max-w-[460px] mx-auto rounded-lg overflow-hidden border border-violet-700 bg-slate-950 shadow-sm">
      <View className="relative">
        <View className="w-full aspect-video">
          <Image
            source={{
              uri: item.coverUrl,
            }}
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>
        <View className="absolute bottom-0 bg-violet-500 px-3 py-1.5 rounded-tr-md rounded-br-md">
          <Text className="text-gray-50 font-bold text-sm">
            {item.categorie.toUpperCase()}
          </Text>
        </View>
      </View>
      
      <View className="p-6 space-y-4 gap-4">
        <View className="space-y-6">
          <Text className="text-xl font-semibold text-gray-100">
            {item.title}
          </Text>
        </View>
        
        <Text className="font-normal text-lg text-gray-400" numberOfLines={3}>
          {item.shortDescription}
        </Text>
        
        <View className="flex-row items-center justify-between space-x-6">
          <View className="flex-row items-center">
            <Text className="text-gray-500 font-semibold text-md">
              {stringToDate(item.createdAt)}
            </Text>
          </View>
          <TouchableOpacity 
            onPress={goToPost}
            className="bg-emerald-500 px-4 py-2 rounded-md"
          >
            <Text className="text-white font-medium text-lg">Ver mais...</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PostCard;
