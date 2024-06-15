import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginPage = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setErrorMessage('');
      navigation.navigate('HomeScreen');
    } catch (error) {
      setErrorMessage('Invalid email and/or password. Please try again');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>
      <Text style={styles.title}>ConnectSphere</Text>
      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TouchableOpacity onPress={() => alert('Forgot Email')}>
          <Text style={styles.forgotText}>Forgot Email?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style={styles.input}
        />
        <TouchableOpacity onPress={() => alert('Forgot Password')}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.separatorContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>Or Continue With</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={styles.socialButtonGoogle}>
          <Image source={require('../assets/google.png')} style={styles.socialButtonImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButtonFacebook}>
          <Image source={require('../assets/facebook.png')} style={styles.socialButtonImage} />
        </TouchableOpacity>
      </View>
      <Text style={styles.registerText}>Don't have an account? </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.boldText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4f4f4',
  },
  boldText: {
    fontWeight: 'bold',
  },
  registerText: {
    fontSize: 14,
    color: '#333',
  },
  logoContainer: {
    marginBottom: 3,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 70,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 15,
  },
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
  },
  forgotText: {
    alignSelf: 'flex-end',
    color: '#0066cc',
  },
  button: {
    width: '80%',
    backgroundColor: '#555',
    padding: 15,
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  orText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#333',
    paddingHorizontal: 10,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  socialButtonGoogle: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginRight: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  socialButtonFacebook: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  socialButtonImage: {
    width: 24,
    height: 24,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default LoginPage;