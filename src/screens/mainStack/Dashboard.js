import React from 'react';
import {SafeAreaView, Text, Button, StyleSheet} from 'react-native';
import {ScreenContainer} from 'react-native-screens';
import AsyncStorage from '@react-native-community/async-storage';

const Dashboard = ({navigation}) => {
  const handelLogout = async () => {
    navigation.replace('LogIn');
    try {
      AsyncStorage.setItem('token', 'false');
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <ScreenContainer>
      <SafeAreaView>
        <Text style={style.title}>Hey welcome to app</Text>
        <Button title="Log Out" onPress={handelLogout} />
      </SafeAreaView>
    </ScreenContainer>
  );
};
const style = StyleSheet.create({
  text: {
    fontSize: 15,
    margin: 10,
  },
  title: {
    fontWeight: 'bold',
    marginVertical: 4,
    fontSize: 20,
    textAlign: 'center',
  },
  container: {
    display: 'flex',
    alignContent: 'center',
  },
});
export default Dashboard;
