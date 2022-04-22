import React from 'react';
import { create } from 'react-test-renderer';
import ContainerTesting from '../../src/helpers/reduxTesting';
import BookDetail from '../../src/screens/BookDetail';

describe('Snapshot', () => {
  test('BookDetail Snapshot', async () => {
    const component = create(ContainerTesting(<BookDetail />));
    expect(component).toMatchSnapshot();
  });
});
