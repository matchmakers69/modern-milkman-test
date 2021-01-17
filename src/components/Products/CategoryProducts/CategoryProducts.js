import React from 'react';
import PropTypes from 'prop-types';
import { ProductsGrid } from '../common.styles';
import ProductSingle from '../ProductSingle';

const CategoryProducts = ({ products }) => {
  return (
    <>
      {products.length > 0 ? (
        <ProductsGrid>
          {products.map(product => (
            <ProductSingle key={product.key} product={product} />
          ))}
        </ProductsGrid>
      ) : (
        <p>Sorry no products here</p>
      )}
    </>
  );
};

CategoryProducts.defaultProps = {
  products: [],
};

CategoryProducts.propTypes = {
  products: PropTypes.instanceOf(Array),
};

export default CategoryProducts;
