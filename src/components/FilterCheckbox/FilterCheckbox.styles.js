import styled from 'styled-components';

const CheckboxButton = styled('span')`
  display: block;
  margin-right: 8px;
  margin-bottom: 8px;
  background-color: ${({ theme }) => theme.teal};

  &:last-child {
    margin-right: 0;
  }
`;

const CheckboxText = styled('span')`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.white};
  padding: 0 12px;
  display: block;
  width: 100%;
  height: 100%;
  line-height: 32px;
`;

const CheckboxLabel = styled('label')`
  height: 3rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: color-interpolation-filters;

  cursor: pointer;
  width: 100%;

  input {
    position: absolute;
    opacity: 0;
    visibility: hidden;
    &:checked + ${CheckboxText} {
      background-color: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.white};
    }
  }
`;

export { CheckboxButton, CheckboxLabel, CheckboxText };
