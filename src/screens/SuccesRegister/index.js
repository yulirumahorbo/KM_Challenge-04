import {
  StyleSheet, Text, View, SafeAreaView, Image,
} from 'react-native';
import React from 'react';
import { moderateScale } from 'react-native-size-matters';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CheckIcon from '../../assets/image/Check_Icon.png';
import iconBack from '../../assets/image/icon-back.png';

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
  buttonContainer: {
    backgroundColor: '#873c1e',
    paddingHorizontal: moderateScale(115),
    paddingVertical: moderateScale(10),
    borderRadius: moderateScale(30),
  },
});
function SuccesRegister({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          margin: moderateScale(16),
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Image
            source={iconBack}
            style={{ height: moderateScale(35), width: moderateScale(35) }}
          />
        </TouchableOpacity>
        <Text style={styles.regularText}>Login</Text>
      </View>
      <View
        style={{
          backgroundColor: '#ccaf9b',
          alignItems: 'center',
          paddingTop: moderateScale(80),
        }}
      >
        <Text style={[styles.title, { color: '#873c1e' }]}>
          Registration Completed!
        </Text>
        <Image
          source={CheckIcon}
          style={{
            height: moderateScale(130),
            width: moderateScale(150),
            resizeMode: 'contain',
            marginTop: moderateScale(80),
          }}
        />
        <Text
          style={[
            styles.regularText,
            { width: moderateScale(250), textAlign: 'center' },
          ]}
        >
          We sent email verification to your email
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default SuccesRegister;
