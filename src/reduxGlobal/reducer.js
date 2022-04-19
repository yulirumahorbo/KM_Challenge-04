const intialState = {
  loading: false,
  refresh: false,
};

const Global = (state = intialState, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.status,
      };
    case 'SET_REFRESH':
      return {
        ...state,
        refresh: action.status,
      };
    default:
      return state;
  }
};

export default Global;
