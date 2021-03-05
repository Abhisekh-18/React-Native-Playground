import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Dashboard from '../screens/mainStack/Dashboard';
import Profile from '../screens/mainStack/Profile';
import Menu from '../screens/mainStack/Menu';

const MenuStack = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Dashboard" component={Dashboard} />
  </HomeStack.Navigator>
);
const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Profile} />
  </ProfileStack.Navigator>
);
const BottomStackScreen = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Dashboard"
      component={HomeStackScreen}
      //options={{tabBarIcon: 'home-account'}}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      //options={{tabBarIcon: 'bell-outline'}}
    />
  </Tab.Navigator>
);
const MainStackNavigation = () => {
  return (
    <MenuStack.Navigator drawerContent={(props) => <Menu {...props} />}>
      <MenuStack.Screen name="Bottom" component={BottomStackScreen} />
    </MenuStack.Navigator>
  );
};

export default MainStackNavigation;
