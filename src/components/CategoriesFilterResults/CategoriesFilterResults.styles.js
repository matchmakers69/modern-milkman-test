import styled from 'styled-components';

const FiltersWrapper = styled('div')`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 15px;
  flex-wrap: wrap;
`;

const FilterButtonWrapper = styled('div')`
  margin-bottom: 30px;
`;

const ButtonClear = styled('button')`
  background-color: ${({ theme }) => theme.orange};
  height: 3.5rem;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.white};
  font-size: 1.3rem;
  max-width: 100px;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.bold};
  cursor: pointer;
`;

export { FiltersWrapper, FilterButtonWrapper, ButtonClear };
