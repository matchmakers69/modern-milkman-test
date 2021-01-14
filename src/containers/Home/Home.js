import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategoriesData } from 'store/categories/actions';

const Home = () => {
  const dispatch = useDispatch();
  const unmounted = useRef(false);

  useEffect(() => {
    const fetchCategories = async () => {
      if (!unmounted.current) {
        await dispatch(fetchCategoriesData());
      }
    };
    fetchCategories();

    return () => {
      unmounted.current = true;
    };
  }, [dispatch]);

  return <div>home</div>;
};

export default Home;
