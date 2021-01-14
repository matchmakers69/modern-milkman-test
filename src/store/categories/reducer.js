import {
  FETCHING_CATEGORIES_START,
  FETCHING_CATEGORIES_SUCCESS,
  FETCHING_CATEGORIES_FAILURE,
} from './types';

const objInitialState = {
  categories: [],
  isLoading: false,
  isError: false,
};

const categoriesReducer = (state = objInitialState, action) => {
  switch (action.type) {
    default:
      return {
        ...state,
      };
  }
};

export default categoriesReducer;
