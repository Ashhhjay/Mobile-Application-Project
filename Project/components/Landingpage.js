import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


import { useNavigation } from '@react-navigation/native';

const Loginpage = () => {
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
          <TouchableOpacity style={styles.imageContainer}>
            <Ionicons name="image" size={54} color="black" />
          </TouchableOpacity>
          <View style={styles.changeButtonContainer}>
            <TouchableOpacity style={styles.changeButton}>
              <Text style={styles.changeButtonText}>Upload Profile Picture</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.changeButton}>
              <Text style={styles.changeButtonText}>Change Username</Text>
            </TouchableOpacity>
          </View>
          <TextInput style={styles.input} placeholder="Add Description" />
          <Text style={styles.bio}>Bio</Text>
          <Text style={styles.description}>
            One answer is that Truth pertains to the possibility that an event will occur. If true – it must occur and if false, it cannot occur. This is a binary world of extreme existential.
          </Text>
          <Text style={styles.title}>Title</Text>
          <TouchableOpacity style={styles.addButton}>
            <Ionicons name="add-circle-outline" size={24} color="blue" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.proceedButton} onPress={() => navigation.navigate('HomeScreen')}>
            <Text style={styles.proceedButtonText}>Proceed to Homepage</Text>
            <Ionicons name="chevron-forward-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
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
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  changeButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  changeButton: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    borderColor: '#0FD4EF',
    borderWidth: 1,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  changeButtonText: {
    fontSize: 10,
    color: 'black',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 16,
  },
  bio: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: 'gray',
    marginVertical: 8,
  },
  title: {
    fontSize: 16,
    marginVertical: 8,
  },
  addButton: {
    alignItems: 'center',
    marginVertical: 16,
  },
  proceedButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderColor: '#00C900',
    borderWidth: 2,
    borderRadius: 8,
    padding: 8,
    marginVertical: 16,
    shadowColor: "#000", // color of the shadow
    shadowOffset: {
      width: 0, // horizontal distance of shadow
      height: 2, // vertical distance of shadow
    },
    shadowOpacity: 0.25, // transparency of shadow
    shadowRadius: 3.84, // blur radius of shadow
    elevation: 5, // for Android shadow
  },
  proceedButtonText: {
    fontSize: 16,
    color: 'black',
    marginRight: 8,
  },
});

export default Loginpage;
