import React from 'react';
import PropTypes from 'prop-types';
import { renderPriceWithCurrency } from 'utils/renderPrice';
import { showStockInfo } from 'utils/renderStockInfo';
import {
  Product,
  ProductContent,
  ProductFooter,
  PriceWrapper,
  PriceLabel,
  HeaderContent,
  StockContent,
} from './ProductSingle.styles';

const ProductSingle = ({ product: { stock, title, price } }) => {
  const inStock = showStockInfo(stock);
  return (
    <Product inStock={inStock}>
      <ProductContent>
        <HeaderContent>
          <h2>{title}</h2>
        </HeaderContent>
        <StockContent>{inStock}</StockContent>
      </ProductContent>
      <ProductFooter>
        <PriceWrapper>
          <PriceLabel>Price:</PriceLabel>
          <div>{renderPriceWithCurrency(price)}</div>
        </PriceWrapper>
      </ProductFooter>
    </Product>
  );
};

ProductSingle.defaultProps = {
  product: {
    stock: 10,
    title: '',
    price: 10,
  },
};

ProductSingle.propTypes = {
  product: PropTypes.shape({
    stock: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
  }),
};

export default ProductSingle;
