import React from 'react';
import { create } from 'react-test-renderer';
import ContainerTesting from '../../src/helpers/reduxTesting';
import Home from '../../src/screens/Home';
import { store } from '../../src/store';

const Token = store.getState().login.tokenData;
const booksData = store.getState().home.bookData;

jest.useFakeTimers('legacy');

describe('Snapshot', () => {
  test('Home Snapshot', async () => {
    const component = create(ContainerTesting(<Home />));
    expect(component).toMatchSnapshot();
  });
});

describe('Validation Data Type', () => {
  test('BooksData', () => {
    expect(typeof booksData).toBe('object');
  });

  test('Token', () => {
    expect(typeof Token).toBe('string');
  });
});
