const initialState = {
  bookData: [],
  bookDataDetail: {},
};

const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BOOK':
      return{
        ...state,
        bookData: action.dataBook,
      }
    case 'SET_BOOK_DETAIL':
      return{
        ...state,
        bookDataDetail: action.dataBookDetail,
      }
  default:
    return {
      ...state
    }
  }
  };
export default HomeReducer;