import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const RegistrationSuccessful = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login');  // Make sure this matches the registered name
    }, 5000);

    return () => clearTimeout(timer);  // Clean up the timer when component unmounts
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>
      <Text style={styles.title}>Registration Successful!</Text>
      <View style={styles.iconContainer}>
        <Image source={require('../assets/circle-check.png')} style={styles.checkIcon} />
      </View>
      <Text style={styles.message}>Your Registration is Successful, You will be redirected to the Login page in 5 seconds...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logoContainer: {
    marginTop: -150,
  },
  logo: {
    width: 100,
    height: 100, // Adjust according to your logo's aspect ratio
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 110,
  },
  iconContainer: {
    marginTop: 70
  },
  checkIcon: {
    width: 100,  // Adjust based on your check icon's dimensions
    height: 100   // Adjust based on your check icon's dimensions
  },
  message: {
    marginTop: 70,
    fontSize: 20,
    textAlign: 'center'
  }
});

export default RegistrationSuccessful;
