import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ForgotEmail = ({ navigation }) => {
    const [email, setEmail] = useState('');

    const handleEmailRecovery = () => {
        // Logic to recover email
        alert('Instructions to recover your email have been sent to your email address.');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Forgot Email</Text>
            <TextInput
                placeholder="Enter your email address"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TouchableOpacity style={styles.button} onPress={handleEmailRecovery}>
                <Text style={styles.buttonText}>Recover Email</Text>
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '80%',
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 20,
    },
    button: {
        width: '80%',
        backgroundColor: '#555',
        padding: 15,
        alignItems: 'center',
        borderRadius: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default ForgotEmail;
