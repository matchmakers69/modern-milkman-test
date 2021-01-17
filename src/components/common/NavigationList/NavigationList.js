import React from 'react';
import _isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';
import { NavList, NavListItem, NavListItemLink } from './NavigationList.styles';

const NavigationList = ({ categories }) => {
  return (
    <NavList>
      {!_isEmpty(categories) && categories.length > 0 ? (
        categories.map(category => (
          <NavListItem key={category.title}>
            <NavListItemLink to={`/category/${category.id}`}>
              <span className="text-link">{category.title}</span>
            </NavListItemLink>
          </NavListItem>
        ))
      ) : (
        <span>No data to display</span>
      )}
    </NavList>
  );
};

NavigationList.defaultProps = {
  categories: [],
};

NavigationList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
};

export default NavigationList;
