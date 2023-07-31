import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface ThemeButtonProps {
  title: string;
  onPress: () => void;
}

const ThemeButton: React.FC<ThemeButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#1026f7",  // Change the color to your desired blue shade
    borderRadius: 20,        // Adjust the value to control the button's roundness
    display: "flex",
    width: 312,
    padding: 13,
    alignItems: 'center',
    justifyContent: "space-between"
  },
  buttonText: {
    color: 'white',           // Change the text color to your desired color
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ThemeButton;
