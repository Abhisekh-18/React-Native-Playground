import {Base64} from 'js-base64';
import React from 'react';
import {Text, Button, StyleSheet, TextInput, Alert} from 'react-native';
import {ScreenContainer} from 'react-native-screens';
import {BaseURL} from '../../utils/BaseUrl';

const SignUp = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [userName, setuserName] = React.useState('');
  const userSignup = () => {
    const data = {
      user_name: userName,
      user_email: email,
      user_password: Base64.encode(password),
    };
    if (email && password && userName) {
      BaseURL.post('users', data)
        .then((res) => {
          navigation.replace('mainStack');
          console.log('jjfdf');
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      Alert.alert('Please fill all the fields');
    }
  };
  return (
    <ScreenContainer>
      <Text style={style.title}>You are on Sign Up Page</Text>
      <TextInput
        style={style.text}
        placeholder="Please Enter your full name"
        value={userName}
        onChangeText={(text) => setuserName(text)}
      />
      <TextInput
        style={style.text}
        placeholder="Please Enter your email address"
        value={email}
        onChangeText={(text) => setEmail(text)}
        textContentType="emailAddress"
      />
      <TextInput
        style={style.text}
        placeholder="Please Enter password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />
      <Button title="Sign Up" onPress={userSignup} />
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
  button: {
    borderRadius: 5,
  },
});
export default SignUp;
