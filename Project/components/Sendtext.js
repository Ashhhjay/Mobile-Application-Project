// send text
import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const messages = [
  {
    id: '1',
    name: 'Ali Hussain',
    message: 'You: Hey! Did you get the work. I\'m waiting for the response.',
    time: '01:34',
    avatar: require('../assets/Ellipse2.png'), // make sure you have these avatar images in your assets folder
  },
  {
    id: '2',
    name: 'Tasbeeh Fatima',
    message: 'Tasbeeh: Hey Ali! When to proceed with next milestone.',
    time: '11:23',
    avatar: require('../assets/Ellipse3.png'),
  },
  {
    id: '3',
    name: 'Hassan Tallal',
    message: 'Hassan: I will be taking off tomorrow.',
    time: '12:50',
    avatar: require('../assets/Ellipse4.png'),
  },
  {
    id: '4',
    name: 'Dua Fatima',
    message: 'You: Hey! Did you get the work. I\'m waiting for the response.',
    time: '01:34',
    avatar: require('../assets/Ellipse5.png'),
  },
  {
    id: '5',
    name: 'Faizan Ahmed',
    message: 'You: Hey! Did you get the work. I\'m waiting for the response.',
    time: '01:34',
    avatar: require('../assets/Ellipse6.png'),
  },
  {
    id: '6',
    name: 'Ali Hussain',
    message: 'You: Hey! Did you get the work. I\'m waiting for the response.',
    time: '01:34',
    avatar: require('../assets/Ellipse2.png'), // make sure you have these avatar images in your assets folder
  },
  {
    id: '8',
    name: 'Tasbeeh Fatima',
    message: 'Tasbeeh: Hey Ali! When to proceed with next milestone.',
    time: '11:23',
    avatar: require('../assets/Ellipse3.png'),
  },
  {
    id: '9',
    name: 'Hassan Tallal',
    message: 'Hassan: I will be taking off tomorrow.',
    time: '12:50',
    avatar: require('../assets/Ellipse4.png'),
  },
  {
    id: '10',
    name: 'Dua Fatima',
    message: 'You: Hey! Did you get the work. I\'m waiting for the response.',
    time: '01:34',
    avatar: require('../assets/Ellipse5.png'),
  },
  {
    id: '10',
    name: 'Dua Fatima',
    message: 'You: Hey! Did you get the work. I\'m waiting for the response.',
    time: '01:34',
    avatar: require('../assets/Ellipse5.png'),
  }
];

const Sendtext = () => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <Image source={item.avatar} style={styles.avatar} />
      <View style={styles.content}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
      <Text style={styles.time}>{item.time}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerBack}>{'<'}</Text>
        </TouchableOpacity>  
        <Text style={styles.headerTitle}>Solutions iNC</Text>
      </View>
      <View style={styles.subHeader}>
        <Text style={styles.subHeaderTitle}>Messages</Text>
      </View>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    paddingHorizontal: 10,
  },
  item: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  content: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  message: {
    color: '#666',
    fontSize: 14,
  },
  time: {
    fontSize: 12,
    color: '#666',
  },
  header: {
    height: 60, // Adjust the height as needed
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  headerBack: {
    fontSize: 24,
    color: '#007AFF'
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  subHeader: {
    height: 40, // Adjust the height as needed
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  subHeaderTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default Sendtext;
