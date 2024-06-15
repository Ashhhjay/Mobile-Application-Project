//Search by Contacts
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ByContacts = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.indicator}></View>
      </View>
      <View style={styles.outerCard}>
        <View style={styles.innerCard}>
          <Text style={styles.header1}>My Contacts</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Searchbyusername')}>
            <Text style={styles.buttonText}>Hassan Talal | htq100</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Dua Fatima | duaq11</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Tasbeeh Fatima | tasbeeh001</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Ali Hussain | alih600</Text>
          </TouchableOpacity>     
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Ali Hussain | alih600</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Faizan Ahmed | Faizan400</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sarah John | Johns4</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Zahra Moazam | Zahram30</Text>
          </TouchableOpacity>     
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>David Gulzar | Dave299</Text>
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
    alignItems: 'center',
    padding: 16,
    marginTop: 30, // Adjusts to account for the notch or status bar
  },
  indicator: {
    backgroundColor: '#00C900',
    height: 12,
    width: 12,
    borderRadius: 30,
    marginLeft: 'auto',
  },
  outerCard: {
    flex: 1,
    margin: 16,
    borderWidth: 6,
    borderColor: '#51EF1A',
    borderRadius: 30,
    backgroundColor: '#8EE4FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCard: {
    width: '94%',
    height: '97%',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 16,
    justifyContent: 'flex-start', // Ensures content starts from the top
  },
  header1: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,

  },
  button: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 10,
    marginTop: 15,
    shadowColor: "#000", // color of the shadow
      shadowOffset: {
          width: 0, // horizontal distance of shadow
          height: 2, // vertical distance of shadow
      },
      shadowOpacity: 0.25, // transparency of shadow
      shadowRadius: 3.84, // blur radius of shadow
      elevation: 5, // for Android shadow
  },
  buttonText: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold'
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

export default ByContacts;
