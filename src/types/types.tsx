import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Login: undefined;
  ChildNavigator: undefined;
  // Add other screen names and their params as needed
};

export type ParentScreenRouteProp = RouteProp<RootStackParamList, 'Login'>;
export type ChildNavigatorScreenRouteProp = RouteProp<
  RootStackParamList,
  'ChildNavigator'
>;

export type ParentScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;
export type ChildNavigatorScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ChildNavigator'
>;
