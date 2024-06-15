import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Homepage = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Homepage</Text>
        <View style={styles.indicator}></View>
      </View>
      <View style={styles.content}>
        <View style={styles.greenBox}>
          <View style={styles.blueBox}>
            <Text style={styles.dateText}>15 May, 2025</Text>
            <Text style={styles.welcomeText}>Welcome John</Text>
          </View>
        </View>
        <View style={styles.Container2}>
          <Ionicons name="videocam" size={32} color="black" />
          <TouchableOpacity onPress={() => navigation.navigate('startmeeting')}>
            <Text style={styles.meetingtext}>Start a Meeting</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Container2}>
          <Ionicons name="mail" size={32} color="black" />
          <TouchableOpacity onPress={() => navigation.navigate('Sendtext')}>
           <Text style={styles.meetingtext}>Send a Text</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Container2}>
          <Ionicons name="briefcase" size={32} color="black" />
          <TouchableOpacity onPress={() => navigation.navigate('PostJob')}>
            <Text style={styles.meetingtext}>Post a Job</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Container2}>
          <Ionicons name="search" size={32} color="black" />
          <TouchableOpacity onPress={() => navigation.navigate('FindJob')}>
            <Text style={styles.meetingtext}>Find a Job</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('HomeScreen')}>
          <Ionicons name="home" size={24} color="black" />
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Messages')}>
          <Ionicons name="chatbubbles" size={24} color="black" />
          <Text>Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Ionicons name="cash" size={24} color="black" />
          <Text>Contracts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Ionicons name="notifications" size={24} color="black" />
          <Text>Alerts</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  indicator: {
    backgroundColor: '#00C900',
    height: 12,
    width: 12,
    borderRadius: 6,
    marginLeft: 'auto',
  },
  content: {
    flex: 1,
    marginTop: 15,
    alignItems: 'center',
  },
  greenBox: {
    width: '100%',
    height: 120,
    backgroundColor: '#00FF00',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blueBox: {
    width: '90%',
    height: '80%',
    backgroundColor: '#4BD4FF',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  dateText: {
    fontSize: 18,
    color: 'black',
    fontStyle: 'italic'
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    fontStyle: 'italic'
  },
  Container2: {
    flexDirection: 'row',
    // marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    margin: 15,
    alignItems: 'flex-start',
    alignSelf: 'stretch', // Ensure the container stretches across the width
    shadowColor: "#000", // color of the shadow
      shadowOffset: {
          width: 0, // horizontal distance of shadow
          height: 2, // vertical distance of shadow
      },
      shadowOpacity: 0.25, // transparency of shadow
      shadowRadius: 3.84, // blur radius of shadow
      elevation: 5, // for Android shadow
  },
  meetingtext: {
    fontSize: 18,
    marginLeft:90,
    marginTop: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#EEE',
  },
  footerButton: {
    alignItems: 'center',
  },
});

export default Homepage;
