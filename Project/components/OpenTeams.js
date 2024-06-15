//open teams
import React from 'react';
import { View, Text, TextInput, FlatList, Switch, StyleSheet, Image,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const messages = [
  { id: '1', user: 'Sara J.', text: 'Hey everyone! We have a new task to do regarding our new project.', color: '#FF0000' },
  { id: '2', user: 'Marie A.', text: 'Hi, Cool. Im In, What’s my milestone?', color: '#FFA500' },
  { id: '3', user: 'Muhammad A.', text: 'Hi, Is this new task due today, last milestone was big..', color: '#FF00FF' },
  { id: '4', user: 'You', text: 'This is easier guys! Simple code! Two of you can do that.', color: '#808080' },
  { id: '5', user: 'Zahra M.', text: 'Is it going to be Muhammad and Alisha!', color: '#FFFF00' },
  { id: '6', user: 'Alisha W.', text: 'of COURSE, i have expertise in this, will help for sure!', color: '#0000FF' },
  { id: '7', user: 'Tabeeb F.', text: 'okay lets start then guys, we need to go thru last milestones, still has issues!', color: '#00FF00' },
  { id: '8', user: 'Sara J.', text: 'Start everyone!', color: '#FF0000' },
];

const ChatScreen = () => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <View style={styles.messageContainer}>
      <View style={[styles.avatar, { backgroundColor: item.color }]} />
      <View style={styles.message}>
        <Text style={styles.userName}>{item.user}</Text>
        <Text style={styles.messageText}>{item.text}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Oracle Studios</Text>
        <Switch />
      </View>
      <Text style={styles.timeText}>Today, 12:34 pm</Text>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messageList}
      />
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Send a Text" />
        <View style={styles.icons}>
        
          <Image source={require('../assets/mic.png')} style={styles.icon} />
        
        <TouchableOpacity onPress={() => navigation.navigate('startmeeting')}>
          <Image source={require('../assets/camra1.png')} style={styles.icon} />
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F8F8F8',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  timeText: {
    textAlign: 'center',
    marginVertical: 8,
    color: '#808080',
  },
  messageList: {
    paddingBottom: 80,
  },
  messageContainer: {
    flexDirection: 'row',
    marginVertical: 8,
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  message: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 8,
    flex: 1,
  },
  userName: {
    fontWeight: 'bold',
  },
  messageText: {
    marginTop: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  textInput: {
    flex: 1,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  icons: {
    flexDirection: 'row',
    marginLeft: 8,
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 16,
  },
});

export default ChatScreen;
