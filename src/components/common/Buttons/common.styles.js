import styled from 'styled-components';
import { theme } from 'theme/MainTheme';

const ButtonWrapper = styled('div')`
  margin-bottom: 20px;
`;

const Button = styled('button')`
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 4rem;
  max-width: 23rem;
  letter-spacing: 1px;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: ${({ theme }) => theme.bold};

  @media (min-width: 1024px) {
    transition: all 0.3s linear;
    min-width: 17rem;
  }

  ${({ isHome }) =>
    isHome &&
    `
    background: rgba(0, 0, 0, .95);
    color: white;
    background-color: #130B58;`}
`;

export { ButtonWrapper, Button };
