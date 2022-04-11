import {Alert, StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {moderateScale} from 'react-native-size-matters';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import axios from 'axios';
import {Base_Url} from '../../helpers/api'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from './redux/action';
import loginImage from '../../assets/image/Login_Image.png';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [dataLogin, setDataLogin] = useState({});
  const {dataToken} = useSelector(state => state.login)

  const isLogin = async () => {
    const savedToken = await AsyncStorage.getItem('token')
    console.log(savedToken)
    dispatch(setToken(savedToken))  
    if(dataToken){
    navigation.navigate('Home');
  }
  }

  useEffect(()=> {
    isLogin()
  }, [])

  const handleInput = (key, value) => {
    setDataLogin(prevState => {
      return{
        ...prevState,
        [key]: value,
      }
    })
  }

  const doLogin = async () => {
    try {
      const results = await axios.post(`${Base_Url}api/v1/auth/login`, dataLogin);
      console.log(results);
      AsyncStorage.setItem('token', results.data.tokens.access.token)

      if (results.status === 201 || results.status === 200)
        navigation.navigate('Home');
    } catch (error) {
      console.log(error);
      Alert.alert('Gagal', 'Isi username dan password Anda');
    }
  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={{backgroundColor:'#ccaf9b', alignItems: 'center', paddingTop: moderateScale(30),marginBottom: moderateScale(25)}}>
        <Image source={loginImage} style={{height: moderateScale(130), width: moderateScale(150), resizeMode: 'contain'}}/>
        <Text style={[styles.title, {color: '#873c1e'}]}>Welcome Back!</Text>
      </View>

      <View >
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          onChangeText={text => handleInput('email', text)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          onChangeText={text => handleInput('password', text)}
          secureTextEntry={true}
        />
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity style={styles.buttonContainer} onPress={doLogin}>
          <Text style={[styles.regularText, {textAlign: 'center', color: '#FFFFFF'}]}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: moderateScale(16), flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.regularSubText}>Dont have an account? </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}>
            <Text style={[styles.regularText, { color: '#3b3b11'}]}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccaf9b',
  },
  title: {
    marginBottom: moderateScale(8),
    fontSize: moderateScale(20),
    color: 'white',
    fontWeight: '700',
  },
  textInput: {
    marginBottom: moderateScale(16),
    backgroundColor: '#c6c3b3',
    color: 'black',
    marginHorizontal: moderateScale(16),
    fontSize: moderateScale(16),
    paddingStart: moderateScale(16),
    borderWidth: 3,
    borderRadius: moderateScale(10),
    borderColor: '#312921'
  },
  buttonContainer: {
    backgroundColor: '#873c1e',
    paddingHorizontal:  moderateScale(142),
    paddingVertical: moderateScale(10),
    borderRadius: moderateScale(30),
  },
  buttonText: {
    fontSize: moderateScale(16),
    color: 'white',
    fontWeight: '700',
  },
  regularText:{
    fontWeight: '500',
    fontSize: moderateScale(18),
    color: '#000000',
  },
  regularSubText:{
    fontWeight: '400',
    fontSize: moderateScale(16),
    color: '#000000',
  },
});