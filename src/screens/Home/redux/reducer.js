const initialState = {
  bookData: [],
  bookDataDetail: {},
  bookDataLimit: [],
};

const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BOOK':
      return {
        ...state,
        bookData: action.dataBook,
      };
    case 'SET_BOOK_DETAIL':
      return {
        ...state,
        bookDataDetail: action.dataBookDetail,
      };
    case 'SET_BOOK_LIMIT':
      return {
        ...state,
        bookDataLimit: action.bookDataLimit,
      };
    default:
      return {
        ...state,
      };
  }
};
export default HomeReducer;
