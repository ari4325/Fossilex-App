import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import ThemeButton from '../components/ThemeButton';

const LoginScreen: React.FC <{ navigation: any }> = ({ navigation }) => {
  const [mobileNumber, setMobileNumber] = useState('');

  const handleLogin = () => {
    // Here, you can handle the login logic using the mobileNumber state value
    // For simplicity, we'll just print the mobile number for now.
    console.log('Logging in with mobile number:', mobileNumber);
    const isLoggedIn = true;
    if (isLoggedIn) {
      navigation.navigate('OTP');
    }
  };

  const handleCreateAccount = () => {
    // Here, you can implement the logic to navigate to the create account screen
    console.log('Navigating to Create Account screen');
    //navigation.navigate("")
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <View style={styles.subContainer}>
        <Text style={styles.welcomeTxt}>Welcome</Text>
        <Text style={{fontSize: 15}}>Login to your account</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        keyboardType="numeric"
        value={mobileNumber}
        onChangeText={setMobileNumber}
      />
      <ThemeButton title='Login' onPress={handleLogin}/>
      <View style={styles.subContainer}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={handleCreateAccount}>
          <Text style={{color: "#1026f7"}}>Sign Up</Text>
        </TouchableOpacity>
      </View>
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
  subContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    margin: 20
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
    color: "black",
    fontFamily: "roboto"
  },
  welcomeTxt: {
    fontSize: 20,
    color: "#1026f7"
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    backgroundColor: "#D9D9D9",
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 40,
    marginTop: 20
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
