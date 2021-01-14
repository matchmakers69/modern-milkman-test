import React from 'react';
import _isEmpty from 'lodash/isEmpty';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavigationList = ({ categories }) => {
  return (
    <ul>
      {!_isEmpty(categories) && categories.length > 0 ? (
        categories.map(category => (
          <li key={category.title}>
            <NavLink to={`/category/${category.id}`}>
              <span className="text-link">{category.title}</span>
            </NavLink>
          </li>
        ))
      ) : (
        <span>No data to display</span>
      )}
    </ul>
  );
};

NavigationList.propTypes = {};

export default NavigationList;
