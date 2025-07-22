import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';

import PostCard from '../../components/PostCard/index';
import Header from '../../components/Header/index';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="flex-1 items-center justify-start">
        <Header onOpen={onOpen} />
        <FlatList
          data={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
          renderItem={({ item }) => <PostCard />}
          ItemSeparatorComponent={() => <View className="h-4" />}
          keyExtractor={(item) => item.toString()}
          showsVerticalScrollIndicator={false}
          className="w-full"
        />
      </View>
      
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
    </SafeAreaView>
  );
};

export default Home;