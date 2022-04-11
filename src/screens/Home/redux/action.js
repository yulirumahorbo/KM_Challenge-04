import axios from "axios";
import { Base_Url, Token } from "../../../helpers/api";
import {navigate} from '../../../helpers/navigate';
import {setLoading, setRefresh} from '../../../reduxGlobal/action'

axios.defaults.headers.Authorization = `Bearer ${Token}`

export const getBook = payload => async dispatch => {
    try {
      dispatch(setLoading(true));
      const result = await axios.get(`${Base_Url}api/v1/books`);
      if(result.status === 200){
        dispatch(setBook(result.data.results));
      }
    } catch (error) {
      console.log(error);
    } finally{
      dispatch(setLoading(false));
      dispatch(setRefresh(false))
    }
};

export const setBook = dataBook => { // set ke reducer
    return {
        type: 'SET_BOOK',
        dataBook,
    }
}

export const getBookDetail = id => async dispatch => {
  try {
    dispatch(setLoading(true));
    const result = await axios.get(`${Base_Url}api/v1/books/${id}`);
    console.log(result);
    if(result.status === 200){
        dispatch(setBookDetail(result.data));
        navigate('Book Detail')
    }
  } catch (error) {
    console.log(error);
  } finally{
    dispatch(setLoading(false));
  }
};

export const setBookDetail = dataBookDetail => {
  return {
      type: 'SET_BOOK_DETAIL',
      dataBookDetail,
  }
}
