import React from 'react';
import { create } from 'react-test-renderer';
import ContainerTesting from '../../src/helpers/reduxTesting';
import Register from '../../src/screens/Register';

jest.useFakeTimers();

describe('Snapshot', () => {
  test('Register Snapshot', async () => {
    const component = create(ContainerTesting(<Register />));
    expect(component).toMatchSnapshot();
  });
});
