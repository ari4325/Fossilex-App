import React from 'react';
import { NavigationContainerRef, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './HomeScreen';
import TransferMoney from './PaymentMethod';

const Stack = createStackNavigator();

const HomeContainer: React.FC = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Dashboard" screenOptions={{
        header: ()=> null
      }}>
        <Stack.Screen name="Dashboard" component={Dashboard}  />
        <Stack.Screen name="Payment" component={TransferMoney} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeContainer;
