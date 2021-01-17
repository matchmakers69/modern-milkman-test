import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavList = styled('ul')`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavListItem = styled('li')`
  display: flex;
  flex-direction: column;
  height: 40px;
  margin-bottom: 5px;

  :last-child {
    margin-bottom: 0;
  }
`;

const NavListItemLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-decoration: none;
  background: ${({ theme }) => theme.blueNav};
  color: ${({ theme }) => theme.white};
  font-weight: ${({ theme }) => theme.bold};
  &.active {
    background: ${({ theme }) => theme.teal};
  }
`;

export { NavList, NavListItem, NavListItemLink };
