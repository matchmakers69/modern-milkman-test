import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import FilterCheckbox from 'components/FilterCheckbox';
import AllProducts from 'components/Products/AllProducts';
import {
  toggleFilterProductsSelected,
  clearSelectedCategories,
} from 'store/categories/actions';
import {
  FiltersWrapper,
  FilterButtonWrapper,
  ButtonClear,
} from './CategoriesFilterResults.styles';

const CategoriesSearchFilter = ({ categories }) => {
  const dispatch = useDispatch();
  const {
    categoriesState: { selectedProductIds },
  } = useSelector(state => state);

  const handleFilterCheckboxChange = category => {
    dispatch(toggleFilterProductsSelected(category));
  };

  const handleClearAllCategories = () => {
    dispatch(clearSelectedCategories());
  };

  const selectedProducts = Object.values(selectedProductIds);
  const hasSelectedProducts = Object.keys(selectedProductIds).length > 0;

  return (
    <>
      <FiltersWrapper>
        {categories.map(category => (
          <FilterCheckbox
            key={category.id}
            checked={selectedProductIds[category.id]}
            onChange={() => handleFilterCheckboxChange(category)}
            label={category.title}
          />
        ))}
      </FiltersWrapper>

      <FilterButtonWrapper>
        <ButtonClear onClick={handleClearAllCategories}>Clear all</ButtonClear>
      </FilterButtonWrapper>
      <AllProducts
        products={categories}
        selectedProducts={selectedProducts}
        hasSelectedProducts={hasSelectedProducts}
      />
    </>
  );
};

CategoriesSearchFilter.propTypes = {
  categories: [],
};

CategoriesSearchFilter.propTypes = {
  categories: PropTypes.instanceOf(Array),
};

export default CategoriesSearchFilter;
