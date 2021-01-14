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
    case FETCHING_CATEGORIES_START:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case FETCHING_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload.data,
        isLoading: false,
      };
    case FETCHING_CATEGORIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export default categoriesReducer;
