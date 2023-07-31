import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

import { Color, FontFamily, FontSize, Border } from "../styles/OTPScreenStyles";
import ThemeButton from '../components/ThemeButton';

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
    <View style={{flex: 1}}>
      <View style={styles.frame}>
        <View style={styles.backarrow}>
          <View style={styles.backarrowChild} />
          <Image
            style={styles.chevronLeftIcon}
            resizeMode="cover"
            source={require("../assets/chevronleft.png")}
          />
        </View>
        <Text style={styles.otpVerification}>OTP Verification</Text>
        <Text style={[styles.enterTheVerification, styles.didntReceiveCodeClr]}>
          Enter the verification code we just sent to your number +91 ********53.
        </Text>
        <TextInput maxLength={1} keyboardType='numeric' style={styles.frameChild} />
        <TextInput maxLength={1} keyboardType='numeric' style={styles.frameChild} />
        <TextInput maxLength={1} keyboardType='numeric' style={styles.frameChild} />
        <TextInput maxLength={1} keyboardType='numeric' style={styles.frameChild} />
        <TextInput maxLength={1} keyboardType='numeric' style={styles.frameChild} />
        <TextInput maxLength={1} keyboardType='numeric' style={styles.frameChild} />
        <Text
          style={[
            styles.didntReceiveCodeContainer,
            styles.enterTheVerificationTypo,
          ]}
        >
          <Text
            style={styles.didntReceiveCodeClr}
          >{`Didn’t receive code? `}</Text>
          <Text style={styles.resend}>Resend</Text>
        </Text>
      </View>
      <ThemeButton onPress={handleSubmit} title='Submit' />
    </View>
  );
};

const styles = StyleSheet.create({
  didntReceiveCodeClr: {
    color: Color.gray_100,
    fontFamily: FontFamily.poppinsRegular,
  },
  enterTheVerificationTypo: {
    fontSize: FontSize.size_sm,
    marginLeft: 12,
    width: 335,
  },
  backarrowChild: {
    height: "70.71%",
    width: "70.71%",
    top: "50.49%",
    right: "29.29%",
    bottom: "-21.21%",
    left: "0%",
    backgroundColor: "#f9f9f9",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    transform: [
      {
        rotate: "-45.56deg",
      },
    ],
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  chevronLeftIcon: {
    height: "37.71%",
    width: "37.71%",
    top: "31.43%",
    right: "30.86%",
    bottom: "30.86%",
    left: "31.43%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  backarrow: {
    width: 50,
    height: 50,
  },
  otpVerification: {
    fontSize: 30,
    color: "#1e232c",
    marginLeft: 12,
    width: 335,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  enterTheVerification: {
    fontSize: FontSize.size_sm,
    marginLeft: 12,
    width: 335,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
  },
  frameChild: {
    backgroundColor: Color.gainsboro,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderWidth: 2,
    width: 46,
    marginLeft: 12,
    borderRadius: Border.br_5xs,
    height: 50,
    textAlign: "center"
  },
  resend: {
    color: "#2539ff",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  didntReceiveCodeContainer: {
    textAlign: "center",
  },
  frame: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
  }
});

export default OTPScreen;