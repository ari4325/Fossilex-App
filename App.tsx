import React from 'react';
import { NavigationContainerRef, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import HomeContainer from './src/screens/Container';
import ProfileScreen from './src/screens/ProfileScreen';
import OTPScreen from './src/screens/OTPScreen';
import TransferMoney from './src/screens/PaymentMethod';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{
        header: ()=> null
      }}>
        <Stack.Screen name="Login" component={LoginScreen}  />
        <Stack.Screen name="Home" component={HomeContainer} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="OTP" component={OTPScreen} />
        <Stack.Screen name="Payment" component={TransferMoney}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
