import axios from 'axios';
import { Alert } from 'react-native';
import { BaseUrl, Token } from '../../../helpers/api';
import { navigate } from '../../../helpers/navigate';
import { setLoading, setRefresh } from '../../../reduxGlobal/action';

axios.defaults.headers.Authorization = `Bearer ${Token}`;
export const setBook = (dataBook) => ({
  type: 'SET_BOOK',
  dataBook,
});
export const getBook = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const result = await axios.get(`${BaseUrl}api/v1/books`);
    if (result.status === 200) {
      dispatch(setBook(result.data.results));
    }
  } catch (error) {
    Alert.alert('Error!');
  } finally {
    dispatch(setLoading(false));
    dispatch(setRefresh(false));
  }
};
export const setBookLimit = (bookDataLimit) => ({
  type: 'SET_BOOK_LIMIT',
  bookDataLimit,
});

export const getBookLimit = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const result = await axios.get(`${BaseUrl}api/v1/books?limit=6`);
    if (result.status === 200) {
      dispatch(setBookLimit(result.data.results));
    }
  } catch (error) {
    Alert.alert('Error!');
  } finally {
    dispatch(setLoading(false));
    dispatch(setRefresh(false));
  }
};

export const setBookDetail = (dataBookDetail) => ({
  type: 'SET_BOOK_DETAIL',
  dataBookDetail,
});
export const getBookDetail = (id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const result = await axios.get(`${BaseUrl}api/v1/books/${id}`);
    if (result.status === 200) {
      dispatch(setBookDetail(result.data));
      navigate('Book Detail');
    }
  } catch (error) {
    Alert.alert('Error!');
  } finally {
    dispatch(setLoading(false));
  }
};
