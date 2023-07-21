import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const OTPScreen: React.FC <{ navigation: any }> = ({ navigation }) => {
  const [otp, setOTP] = useState('');

  const handleOTPChange = (text: string) => {
    // Only allow digits and limit the input to 6 characters
    const otpDigits = text.replace(/[^0-9]/g, '').slice(0, 6);
    setOTP(otpDigits);
  };

  const handleSubmit = () => {
    // Here, you can handle the OTP submission logic using the otp state value
    // For simplicity, we'll just print the OTP for now.
    console.log('Submitted OTP:', otp);
    navigation.navigate('Home');
  };

  const handleResend = () => {
    // Here, you can implement the logic to resend the OTP
    console.log('Resending OTP...');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>
      <TextInput
        style={styles.otpInput}
        placeholder="Enter OTP"
        keyboardType="numeric"
        value={otp}
        onChangeText={handleOTPChange}
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.resendButton} onPress={handleResend}>
        <Text style={styles.buttonText}>Resend OTP</Text>
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
  otpInput: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  resendButton: {
    borderColor: '#3498db',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default OTPScreen;
