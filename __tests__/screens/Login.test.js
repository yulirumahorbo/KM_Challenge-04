import React from 'react';
import { create } from 'react-test-renderer';
import ContainerTesting from '../../src/helpers/reduxTesting';
import Login from '../../src/screens/Login';

// const navigation = {
//   navigate: jest.fn()
// }
const component = create(ContainerTesting(<Login />));

test('Login Snapshot', async () => {
  expect(component).toMatchSnapshot();
});

// test('Navigate to Home Screen', () => {
//   const button = component.root.findByProps({testID: 'LoginButton'}).props;
//   button.onPress();
//   expect(navigation.navigate).toBeCalledWith('Home');
// })
