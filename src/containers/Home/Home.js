import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PageTemplate from 'templates/PageTemplate';
import PageTitle from 'components/common/PageTitle';
import CategoriesFilterResults from 'components/CategoriesFilterResults';
import { updateUI } from 'store/ui/actions';
import BannerInfo from 'components/common/BannerInfo';

const Home = () => {
  const {
    categoriesState: { categories, isLoading },
  } = useSelector(state => state);

  const {
    uiState: { displayBanner },
  } = useSelector(state => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      updateUI({
        displayBanner: false,
      })
    );
  }, [dispatch]);

  if (isLoading) return <span>Data is loading...</span>;
  return (
    <PageTemplate>
      <PageTitle title="Welcome to Milkman App" />
      <BannerInfo displayBanner={displayBanner} />
      <CategoriesFilterResults categories={categories} />
    </PageTemplate>
  );
};

export default Home;
