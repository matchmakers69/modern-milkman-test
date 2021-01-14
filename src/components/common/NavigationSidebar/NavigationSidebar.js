import React from 'react';
import { useSelector } from 'react-redux';
import NavigationList from 'components/common/NavigationList';

const NavigationSidebar = () => {
  const {
    categoriesState: { categories, isLoading },
  } = useSelector(state => state);

  if (isLoading) return <span>Data is loading...</span>;
  return (
    <nav>
      <NavigationList categories={categories} />
    </nav>
  );
};

export default NavigationSidebar;
