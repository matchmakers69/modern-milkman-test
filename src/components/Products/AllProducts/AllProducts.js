import React from 'react';
import PropTypes from 'prop-types';
import { ProductsGrid } from '../common.styles';
import ProductSingle from '../ProductSingle';

const AllProducts = ({ selectedProducts, hasSelectedProducts, products }) => {
  return (
    <ProductsGrid>
      {hasSelectedProducts
        ? selectedProducts.map(categoryProduct => {
            return categoryProduct.map(product => (
              <ProductSingle key={product.key} product={product} />
            ));
          })
        : products.map(category =>
            category.data.map(product => (
              <ProductSingle key={product.key} product={product} />
            ))
          )}
    </ProductsGrid>
  );
};

AllProducts.defaultProps = {
  products: [],
  hasSelectedProducts: false,
  selectedProducts: [],
};

AllProducts.propTypes = {
  products: PropTypes.instanceOf(Array),
  hasSelectedProducts: PropTypes.bool,
  selectedProducts: PropTypes.instanceOf(Array),
};

export default AllProducts;
