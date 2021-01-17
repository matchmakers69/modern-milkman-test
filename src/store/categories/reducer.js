import {
  FETCHING_CATEGORIES_START,
  FETCHING_CATEGORIES_SUCCESS,
  FETCHING_CATEGORIES_FAILURE,
  CHECK_FILTER_CATEGORY,
  CLEAR_SELECTED_CATEGORIES,
} from './types';

const objInitialState = {
  categories: [],
  isLoading: false,
  isError: false,
  productChecked: false,
  selectedProductIds: {},
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
      const { data } = action.payload;

      const updatedCategoriesById = data.map((category, index) => {
        return {
          ...category,
          id: index + 1,
        };
      });

      return {
        ...state,
        categories: updatedCategoriesById,
        isLoading: false,
      };
    case FETCHING_CATEGORIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case CHECK_FILTER_CATEGORY: {
      const { category } = action.payload;
      const isChecked = !!state.selectedProductIds[category.id];

      if (isChecked) {
        const {
          [category.id]: objToRemoved,
          ...restProducts
        } = state.selectedProductIds;
        return {
          ...state,
          selectedProductIds: restProducts,
        };
      }

      return {
        ...state,
        selectedProductIds: {
          ...state.selectedProductIds,
          [category.id]: category.data,
        },
      };
    }

    case CLEAR_SELECTED_CATEGORIES:
      return {
        ...state,
        selectedProductIds: {},
      };

    default:
      return {
        ...state,
      };
  }
};

export default categoriesReducer;
