import React, { useEffect } from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeContainer from './HomeContainer';
import ProfileScreen from './ProfileScreen';
import ScanScreen from './ScanScreen';
import TransferMoney from './PaymentMethod';
import CustomTabIcon from '../components/TabIcon';
import NotificationScreen from './NotificationScreen';

const Tab = createBottomTabNavigator();

const App: React.FC <{ navigation: any }> = ({ navigation }) => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator screenOptions={{
        header: ()=> null
      }}>
        <Tab.Screen name="Home" component={HomeContainer} options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabIcon
              source={require('../assets/home.png')}
              focused={focused}
            />
          )
        }}/>
        <Tab.Screen name="Scan" component={ScanScreen} options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabIcon
              source={require('../assets/qr-code-1.png')}
              focused={focused}
            />
          )
        }}/>
        <Tab.Screen name="Notification" component={NotificationScreen} options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabIcon
              source={require('../assets/Notification.png')}
              focused={focused}
            />
          )
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
