import styled from 'styled-components';

const ProductsGrid = styled.div`
  display: grid;
  grid-auto-rows: 1fr;
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;
  grid-template-columns: 1fr;

  @media (min-width: 641px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export { ProductsGrid };
