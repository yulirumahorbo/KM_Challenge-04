import React from 'react';
import { create } from 'react-test-renderer';
import ContainerTesting from '../../src/helpers/reduxTesting';
import SuccesRegister from '../../src/screens/SuccesRegister';

describe('Snapshot', () => {
  test('SuccesRegister Snapshot', async () => {
    const component = create(ContainerTesting(<SuccesRegister />));
    expect(component).toMatchSnapshot();
  });
});
