import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 3rem;
`;

const Container = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    max-width: 738px;
    flex-direction: row;
  }

  @media (min-width: 992px) {
    max-width: 962px;
  }

  @media (min-width: 1024px) {
    max-width: 994px;
  }
  @media (min-width: 1366px) {
    max-width: 1336px;
  }
`;

const PageWrapper = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: calc(100% - 250px);
  }
`;

export { Wrapper, PageWrapper, Container };
