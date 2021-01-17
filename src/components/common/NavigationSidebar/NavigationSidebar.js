import React from 'react';
import { useSelector } from 'react-redux';
import NavigationList from 'components/common/NavigationList';
import { SidebarNav } from './NavigationSidebar.styles';

const NavigationSidebar = () => {
  const {
    categoriesState: { categories, isLoading },
  } = useSelector(state => state);

  if (isLoading) return <span>Data is loading...</span>;
  return (
    <SidebarNav>
      <NavigationList categories={categories} />
    </SidebarNav>
  );
};

export default NavigationSidebar;
