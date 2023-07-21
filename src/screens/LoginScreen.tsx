import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen: React.FC <{ navigation: any }> = ({ navigation }) => {
  const [mobileNumber, setMobileNumber] = useState('');

  const handleLogin = () => {
    // Here, you can handle the login logic using the mobileNumber state value
    // For simplicity, we'll just print the mobile number for now.
    console.log('Logging in with mobile number:', mobileNumber);
    const isLoggedIn = true;
    if (isLoggedIn) {
      navigation.navigate('Home');
    }
  };

  const handleCreateAccount = () => {
    // Here, you can implement the logic to navigate to the create account screen
    console.log('Navigating to Create Account screen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        keyboardType="numeric"
        value={mobileNumber}
        onChangeText={setMobileNumber}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.createAccountButton} onPress={handleCreateAccount}>
        <Text style={styles.createAccountText}>Create an Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  createAccountButton: {
    borderColor: '#3498db',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  createAccountText: {
    color: '#3498db',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default LoginScreen;
