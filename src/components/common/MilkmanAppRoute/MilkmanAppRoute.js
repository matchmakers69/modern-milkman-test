import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import PageLoader from 'PageLoader';

const MilkmanAppRoute = ({ component: Component, path }) => {
  return (
    <Route
      path={path}
      render={props => <PageLoader component={Component} {...props} />}
    />
  );
};

MilkmanAppRoute.defaultProps = {
  component: {},
  path: '',
};

MilkmanAppRoute.propTypes = {
  component: PropTypes.instanceOf(Object),
  path: PropTypes.string,
};

export default MilkmanAppRoute;
