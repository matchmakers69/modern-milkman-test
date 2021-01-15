import React from 'react';
import { Wrapper, PageWrapper, Container } from './common.styles';
import NavigationSidebar from 'components/common/NavigationSidebar';
import PropTypes from 'prop-types';

const PageTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Container>
        <NavigationSidebar />

        <PageWrapper>{children}</PageWrapper>
      </Container>
    </Wrapper>
  );
};

PageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default PageTemplate;
