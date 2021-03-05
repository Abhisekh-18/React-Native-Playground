import React from 'react';
import {useState} from 'react';
import {Text, Button, TextInput, Alert, StyleSheet, View} from 'react-native';
import {ScreenContainer} from 'react-native-screens';
import AsyncStorage from '@react-native-community/async-storage';
import {BaseURL} from '../../utils/BaseUrl';
import {Base64} from 'js-base64';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setshowPassword] = useState(false);
  const store = async () => {
    try {
      await AsyncStorage.setItem('token', 'true');
    } catch (error) {
      console.log(error);
    }
    fetchData();
  };
  const [user, setUser] = React.useState('');
  const [allUsersData, setallUsersData] = useState([]);
  const fetchData = async () => {
    try {
      const data = await AsyncStorage.getItem('token');
      setUser(data);
    } catch (e) {
      console.log(e);
    }
  };
  React.useEffect(() => {
    BaseURL.get('users').then((res) => {
      setallUsersData(res.data.data);
    });
  }, []);

  const handelLogin = () => {
    // store();

    if (email && password) {
      //Filtering the data to match for authentication

      const filtered = allUsersData.filter((each) => {
        return email === each.user_email && password === each.user_password;
      });

      if (filtered.length) {
        navigation.replace('mainStack');
      } else {
        Alert.alert('Please fill correct email and password');
      }
    } else {
      Alert.alert('Please fill all the fields');
    }
    //navigation.navigate('Dashboard');
  };
  const handelSignUp = () => {
    navigation.navigate('SignUp');
  };
  return (
    <ScreenContainer>
      <Text style={style.title}>You are on Login Page</Text>
      <TextInput
        style={style.text}
        placeholder="Please Enter your email address"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <View style={style.container}>
        <TextInput
          style={[style.text, style.field]}
          textContentType="password"
          placeholder="Please Enter your password"
          secureTextEntry={!showPassword}
          onChangeText={(text) => {
            setPassword(() => Base64.encode(text));
          }}
        />
        {/* Show and hide password */}
        <Button
          title={showPassword ? 'Hide' : 'Show'}
          onPress={() => setshowPassword(!showPassword)}
        />
      </View>

      <Button title="Log In" onPress={handelLogin} />
      <Button title="Create New Account" onPress={handelSignUp} />
    </ScreenContainer>
  );
};
const style = StyleSheet.create({
  text: {
    fontSize: 15,
    margin: 10,
  },
  field: {
    width: '80%',
  },
  title: {
    fontWeight: 'bold',
    marginVertical: 4,
    fontSize: 20,
    textAlign: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    borderRadius: 5,
  },
});
export default Login;
