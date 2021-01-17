import styled from 'styled-components';

const Product = styled.div`
  background: ${({ theme }) => theme.white};
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.grey100};
  align-items: stretch;
  align-content: stretch;
  flex-grow: 1;
  justify-content: space-between;
  text-decoration: none;

  ${({ inStock }) =>
    inStock === 'Out of stock' &&
    `
       opacity: 0.4;
       cursor: not-allowed;
      
      `}
`;

const ProductContent = styled.div`
  flex: 1;
  position: relative;
  padding: 0 15px;
  margin-bottom: 10px;
`;

const ProductFooter = styled.footer`
  flex-shrink: 0;
  padding: 1.5rem;
  width: 100%;
`;

const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const PriceLabel = styled.span`
  display: block;
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.orange};
`;

const StockContent = styled.span`
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.teal};
  display: block;
  text-align: center;
`;

const HeaderContent = styled.header`
  padding: 15px 0;
  text-align: center;
  h2 {
    padding: 0;
    margin: 0;
    line-height: 1.2;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.primary};
  }
`;

export {
  Product,
  ProductContent,
  ProductFooter,
  PriceWrapper,
  PriceLabel,
  HeaderContent,
  StockContent,
};
