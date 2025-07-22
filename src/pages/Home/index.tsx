import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  Pressable,
  ActivityIndicator,
} from 'react-native';

import {GET_ALL_POST} from '../../graphql/query/posts';

import PostCard from '../../components/PostCard';
import Header from '../../components/Header';
import { useQuery } from '@apollo/client';

const Home = () => {
  const [categorie, setCategorie] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const {data, loading, refetch} = useQuery(GET_ALL_POST, {
    variables: {
      where: categorie ? {categorie} : undefined,
    }
  })

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  const handleFind = (value: string) => {
    setCategorie(value);
    setTimeout(() => {
      refetch();
      onClose();
    }, 600);
  };

  const posts = useMemo(() => {
    if (!loading && data?.posts) {
      return data.posts;
    }
    return [];
  }, [loading, data]);

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center px-6 bg-gray-900">
        <ActivityIndicator color="#6b21a8" size="large" />
      </View>
    );
  }

  return (
    <View className="flex-1 items-center justify-start px-6 bg-gray-900">
      <Header onOpen={onOpen} />
      <FlatList
        data={posts}
        renderItem={({item}) => <PostCard item={item} />}
        ItemSeparatorComponent={() => <View className="h-6" />}
        keyExtractor={(item) => item.toString()}
        showsVerticalScrollIndicator={false}
        className="w-full"
      />

      <Modal
        visible={isOpen}
        transparent={true}
        animationType="slide"
        onRequestClose={onClose}
      >
        <Pressable 
          className="flex-1 justify-end bg-black/50"
          onPress={onClose}
        >
          <View className="bg-white rounded-t-3xl p-6">
            <Text className="text-lg font-semibold text-purple-800 mb-4">
              Selecione um Filtro
            </Text>
            <View className="flex-row justify-start space-x-2">
              <TouchableOpacity className="bg-green-100 px-3 py-2 rounded-full">
                <Text className="text-green-800 font-medium">NODE JS</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-red-100 px-3 py-2 rounded-full">
                <Text className="text-red-800 font-medium">REACT JS</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

export default Home;