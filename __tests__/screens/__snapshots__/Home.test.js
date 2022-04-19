import React from 'react';
import { create } from 'react-test-renderer';
import ContainerTesting from '../../../src/helpers/reduxTesting';
import Home from '../../../src/screens/Home';

jest.useFakeTimers();

describe('Name of the group', () => {
  describe('1', () => {
    test('should render', async () => {
      const component = create(ContainerTesting(<Home />));
      expect(component).toMatchSnapshot();
    });
  });
});
