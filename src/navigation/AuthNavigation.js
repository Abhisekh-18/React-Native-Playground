import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/authStack/Login';
import SignUp from '../screens/authStack/SignUp';
import MainStackNavigation from './MainStackNavigation';
const AuthStack = createStackNavigator();

const AuthNavigation = ({navigation}) => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen
          name="LogIn"
          component={Login}
          options={{title: 'Log In'}}
        />
        <AuthStack.Screen
          name="SignUp"
          component={SignUp}
          options={{title: 'Sign Up'}}
        />
        <AuthStack.Screen
          name="mainStack"
          children={MainStackNavigation}
          options={{headerShown: false}}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigation;
