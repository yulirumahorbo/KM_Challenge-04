import {
  Alert, StyleSheet, Text, View, SafeAreaView, Image,
} from 'react-native';
import React, { useState } from 'react';
import { moderateScale } from 'react-native-size-matters';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';
import { BaseUrl } from '../../helpers/api';
import registerImage from '../../assets/image/Register_Image.png';

const regexEmail = '^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$';
const regexPass = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c6c3b3',
  },
  title: {
    marginBottom: moderateScale(8),
    fontSize: moderateScale(20),
    color: 'white',
    fontWeight: '700',
  },
  textInput: {
    marginBottom: moderateScale(16),
    backgroundColor: '#ccaf9b',
    color: 'black',
    marginHorizontal: moderateScale(16),
    fontSize: moderateScale(16),
    paddingStart: moderateScale(16),
    borderWidth: 3,
    borderRadius: moderateScale(10),
    borderColor: '#312921',
  },
  buttonContainer: {
    backgroundColor: '#873c1e',
    paddingHorizontal: moderateScale(126),
    paddingVertical: moderateScale(10),
    marginHorizontal: moderateScale(16),
    borderRadius: moderateScale(30),
  },
  buttonText: {
    fontSize: moderateScale(16),
    color: 'white',
    fontWeight: '700',
  },
  regularText: {
    fontWeight: '500',
    fontSize: moderateScale(18),
    color: '#000000',
  },
  regularSubText: {
    fontWeight: '400',
    fontSize: moderateScale(16),
    color: '#000000',
  },
});
function Register({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const doRegister = async () => {
    try {
      const body = {
        name: email,
        email,
        password,
      };

      const resultRegexEmail = regexEmail.test(email);
      const resultRegexPass = regexPass.test(password);

      if (name) {
        if (resultRegexEmail === true) {
          if (resultRegexPass === true) {
            const results = await axios.post(
              `${BaseUrl}api/v1/auth/register`,
              body,
            );
            if (results.status === 201 || results.status === 200) {
              navigation.navigate('Succes Register');
            }
          } else if (resultRegexPass === false) {
            Alert.alert('Gagal', 'Format Password Tidak Sesuai');
          }
        } else if (resultRegexEmail === false) {
          Alert.alert('Gagal', 'Format Email Tidak Sesuai');
        }
      } else {
        Alert.alert('Gagal', 'Isi fullname, username, dan password Anda');
      }
    } catch (error) {
      Alert.alert('Error!');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: '#c6c3b3',
          alignItems: 'center',
          paddingTop: moderateScale(30),
        }}
      >
        <Image
          source={registerImage}
          style={{
            height: moderateScale(130),
            width: moderateScale(150),
            resizeMode: 'contain',
          }}
        />
      </View>

      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Full Name"
          onChangeText={(text) => {
            setName(text);
          }}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          onChangeText={(text) => {
            setEmail(text);
          }}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          onChangeText={(text) => {
            setPassword(text);
          }}
          secureTextEntry
        />
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity style={styles.buttonContainer} onPress={doRegister}>
            <Text
              style={[
                styles.regularText,
                { textAlign: 'center', color: '#FFFFFF' },
              ]}
            >
              Register
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginTop: moderateScale(16),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={styles.regularSubText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={[styles.regularText, { color: '#3b3b11' }]}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Register;
