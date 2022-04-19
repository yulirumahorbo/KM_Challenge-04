import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import SuccesRegister from '../screens/SuccesRegister';
import Home from '../screens/Home';
import BookDetail from '../screens/BookDetail';

const Stack = createStackNavigator();

export default function MainRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Succes Register" component={SuccesRegister} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Book Detail" component={BookDetail} />
    </Stack.Navigator>
  );
}
