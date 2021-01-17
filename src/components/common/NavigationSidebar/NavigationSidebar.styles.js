import styled from 'styled-components';

const SidebarNav = styled('nav')`
  width: 100%;
  max-width: 100%;
  position: relative;
  background-color: transparent;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    max-width: 25rem;
    background-color: transparent;
    padding-right: 3rem;
    margin-bottom: 0;
  }
`;

export { SidebarNav };
