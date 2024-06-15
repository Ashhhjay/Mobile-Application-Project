import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const PostJob = () => {
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
          <Text style={styles.headerText}>Post A Job</Text>
          <View style={styles.inputRow}>
            <Text style={styles.input}>Job Title</Text>
            <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('JobTitle')}>
              <Ionicons name="create-outline" size={24} color="white" />
              <Text style={styles.editText}>edit</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputRow}>
            <Text style={styles.input}>Job Description</Text>
            <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('JobDescription')}>
              <Ionicons name="create-outline" size={24} color="white" />
              <Text style={styles.editText}>edit</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputRow}>
            <Text style={styles.input}>Job Salary</Text>
            <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('JobSalary')}>
              <Ionicons name="create-outline" size={24} color="white" />
              <Text style={styles.editText}>edit</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputRow}>
            <Text style={styles.input}>Employment Type</Text>
            <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('EmployeType')}>
              <Ionicons name="create-outline" size={24} color="white" />
              <Text style={styles.editText}>edit</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputRow}>
            <Text style={styles.input}>Employment Instruction</Text>
            <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('Employeinst')}>
              <Ionicons name="create-outline" size={24} color="white" />
              <Text style={styles.editText}>edit</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputRow}>
            <Text style={styles.input}>Employment Experience</Text>
            <TouchableOpacity style={styles.editButton}  onPress={() => navigation.navigate('Empexp')}>
              <Ionicons name="create-outline" size={24} color="white" />
              <Text style={styles.editText}>edit</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.uploadButton}>
            <Text style={styles.buttonText}>Upload</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
            <Text style={styles.buttonText}>Cancel</Text>
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
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 2,
    
  },
  input: {
    flex: 1,
    padding: 8,
    fontSize: 16,
    
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 2,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'blue',
    shadowColor: "#000", // color of the shadow
      shadowOffset: {
          width: 0, // horizontal distance of shadow
          height: 2, // vertical distance of shadow
      },
      shadowOpacity: 0.25, // transparency of shadow
      shadowRadius: 3.84, // blur radius of shadow
      elevation: 5, // for Android shadow
  },
  editText: {
    marginLeft: 4,
    fontSize: 16,
    color: '#fff',
  },
  uploadButton: {
    backgroundColor: '#51EF1A',
    borderRadius: 30,
    padding: 10,
    alignItems: 'center',
    marginVertical: 8,
    shadowColor: "#000", // color of the shadow
      shadowOffset: {
          width: 0, // horizontal distance of shadow
          height: 2, // vertical distance of shadow
      },
      shadowOpacity: 0.25, // transparency of shadow
      shadowRadius: 3.84, // blur radius of shadow
      elevation: 5, // for Android shadow
  },
  cancelButton: {
    backgroundColor: '#EEE',
    borderRadius: 30,
    padding: 10,
    alignItems: 'center',
    marginVertical: 8,
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
    fontSize: 16,
    color: 'black',
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

export default PostJob;
