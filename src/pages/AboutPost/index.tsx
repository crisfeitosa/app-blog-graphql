import React, { useMemo } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import {useQuery} from '@apollo/client';
import {GET_POST} from '../../graphql/query/posts';
import { RootStackParamList } from '../../routes';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const AboutPost: React.FC = () => {
  const {params} = useRoute();
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const {postId} = params as RootStackParamList['AboutPost'];

  const {data, loading} = useQuery(GET_POST, {
    variables: {id: postId},
  });

  const post = useMemo(() => {
    if (!loading && data?.post) {
      return data.post;
    }
    return [];
  }, [data, loading]);

  console.log('Post data:', post);

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center px-6 bg-gray-900">
        <ActivityIndicator color="#6b21a8" size="large" />
      </View>
    );
  }

  return (
    <View className="flex-1 bg-gray-900" style={{paddingBottom: insets.bottom }}>
      <View className="relative">
        <View className="w-full aspect-video">
          <Image
            source={{
              uri: post.coverUrl,
            }}
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>
        
        <View className="absolute bottom-0 left-0 bg-violet-500 rounded-tr-md">
          <TouchableOpacity 
            className="flex-row items-center px-4 py-2"
            onPress={() => navigation.goBack()}
          >
            <Feather name="chevron-left" size={28} color="#f9fafb" />
            <Text className="text-gray-50 ml-1 text-2xl font-bold">Voltar</Text>
          </TouchableOpacity>
        </View>
        
        <View className="absolute bottom-0 right-0 bg-violet-500 px-3 py-1.5 rounded-tl-md">
          <Text className="text-gray-50 font-bold text-ms">{post.categorie.toUpperCase()}</Text>
        </View>
      </View>
      
      <View className="mt-6 px-6 w-full gap-4">
        <View>
          <Text className="text-2xl font-bold text-gray-100 mb-4">{post.title}</Text>
        </View>
        
        
      </View>
      <ScrollView showsVerticalScrollIndicator={false} className="px-6">
        <Text className="text-gray-200 leading-6">
          {post.description.text.replace(/\\n/g, '\n')}
        </Text>
      </ScrollView>
    </View>
  );
};

export default AboutPost;