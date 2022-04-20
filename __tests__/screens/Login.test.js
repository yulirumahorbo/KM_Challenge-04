import React from 'react';
import { create } from 'react-test-renderer';
import ContainerTesting from '../../src/helpers/reduxTesting';
import Login from '../../src/screens/Login';

jest.useFakeTimers();
describe('Snapshot', () => {
  test('Login Snapshot', async () => {
    const component = create(ContainerTesting(<Login />));
    expect(component).toMatchSnapshot();
  });
});
