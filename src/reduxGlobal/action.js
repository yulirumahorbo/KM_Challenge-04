export const setLoading = status => {
    return {
      type: 'SET_LOADING',
      status,
    };
  };

  export const setRefresh = status => {
    return {
      type: 'SET_REFRESH',
      status,
    };
  };