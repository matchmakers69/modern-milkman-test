import {
  FETCHING_CATEGORIES_START,
  FETCHING_CATEGORIES_SUCCESS,
  FETCHING_CATEGORIES_FAILURE,
  CHECK_FILTER_CATEGORY,
  CLEAR_SELECTED_CATEGORIES,
} from './types';
import { fetchCategories } from 'utils/fetchCategories';

export const startFetchingCategories = () => ({
  type: FETCHING_CATEGORIES_START,
});

export const setCategoriesData = data => ({
  type: FETCHING_CATEGORIES_SUCCESS,
  payload: {
    data,
  },
});

export const failureFetchingCtegories = error => ({
  type: FETCHING_CATEGORIES_FAILURE,
  payload: {
    error,
  },
});

export const fetchCategoriesData = () => async dispatch => {
  dispatch(startFetchingCategories());
  try {
    const response = await fetchCategories();
    dispatch(setCategoriesData(response));
  } catch (error) {
    dispatch(failureFetchingCtegories());
  }
};

export const toggleFilterProductsSelected = category => ({
  type: CHECK_FILTER_CATEGORY,
  payload: {
    category,
  },
});

export const clearSelectedCategories = () => ({
  type: CLEAR_SELECTED_CATEGORIES,
});
