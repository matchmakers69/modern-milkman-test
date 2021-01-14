import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'theme/GlobalStyles';
import { fetchCategoriesData } from 'store/categories/actions';
import { theme } from 'theme/MainTheme';
import { useDispatch } from 'react-redux';

const MainTemplate = ({ children }) => {
  const dispatch = useDispatch();
  const componentIsMounted = useRef(true);

  useEffect(() => {
    const fetchCategories = async () => {
      if (componentIsMounted.current) {
        await dispatch(fetchCategoriesData());
      }
    };
    fetchCategories();

    return () => {
      componentIsMounted.current = false;
    };
  }, [dispatch]);

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
