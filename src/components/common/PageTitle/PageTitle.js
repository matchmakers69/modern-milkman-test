import React from 'react';
import PropTypes from 'prop-types';
import { Title } from './PageTitle.styles';

const PageTitle = ({ title }) => {
  return (
    <Title>
      <h1>{title}</h1>
    </Title>
  );
};

PageTitle.defaultProps = {
  title: '',
};

PageTitle.propTypes = {
  title: PropTypes.string,
};

export default PageTitle;
