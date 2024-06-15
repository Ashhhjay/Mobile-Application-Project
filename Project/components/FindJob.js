import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ApplyJobScreen = () => {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [resume, setResume] = useState('');
  const [jobType, setJobType] = useState('');
  const [jobExperience, setJobExperience] = useState('');
  const [salaryRange, setSalaryRange] = useState('');

  return (
    <ScrollView style={styles.container}>
       <View style={styles.icon}>
          <Image source={require('../assets/man.png')} style={styles.iconimage} />
        </View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Apply for job</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        style={styles.input}
        placeholder="PHONE NUMBER"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="RESUME"
        value={resume}
        onChangeText={setResume}
      />
      <TextInput
        style={styles.input}
        placeholder="Job Type"
        value={jobType}
        onChangeText={setJobType}
      />
      <TextInput
        style={styles.input}
        placeholder="Job experience"
        value={jobExperience}
        onChangeText={setJobExperience}
      />
      <TextInput
        style={styles.input}
        placeholder="Salary Range"
        value={salaryRange}
        onChangeText={setSalaryRange}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.buttonText}>Apply</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack('HomeScreen')}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  icon: {
    alignItems: 'center',
  },
  iconimage: {
      width: 90,
      height: 90, // Adjust according to your logo's aspect ratio
  },
  header: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 20,
    marginTop:20
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 15,
    marginRight: 20,
    marginLeft: 20
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  applyButton: {
    backgroundColor: 'grey',
    padding: 15,
    borderRadius: 20,
    flex: 1,
    marginRight: 20,
    marginTop:20,
    marginLeft: 20,
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
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 20,
    flex: 1,
    marginLeft: 20,
    marginTop:20,
    marginRight: 20,
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
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default ApplyJobScreen;
