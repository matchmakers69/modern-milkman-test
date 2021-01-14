import {
  FETCHING_CATEGORIES_START,
  FETCHING_CATEGORIES_SUCCESS,
  FETCHING_CATEGORIES_FAILURE,
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
