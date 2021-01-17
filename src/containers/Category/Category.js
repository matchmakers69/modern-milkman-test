import React, { useState, useEffect, useRef } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import PageTemplate from 'templates/PageTemplate';
import { useSelector, useDispatch } from 'react-redux';
import { updateUI } from 'store/ui/actions';
import BannerInfo from 'components/common/BannerInfo';
import Products from 'components/Products/CategoryProducts';
import PageTitle from 'components/common/PageTitle';
import constants from '../../constants';
import BackButton from 'components/common/Buttons/BackButton';

const Category = () => {
  const dispatch = useDispatch();
  const {
    categoriesState: { categories },
  } = useSelector(state => state);

  const {
    uiState: { displayBanner },
  } = useSelector(state => state);

  const componentIsMounted = useRef(true);
  const [objCategory, setObjCategory] = useState(null);
  const { id } = useParams();
  const objFound = categories.find(item => item.id === parseInt(id, 10));
  const { push } = useHistory();

  const handleBackHome = () => {
    push(constants.ROOT);
  };

  useEffect(() => {
    dispatch(
      updateUI({
        displayBanner: true,
      })
    );

    return () => {
      dispatch(
        updateUI({
          displayBanner: false,
        })
      );
    };
  }, [dispatch]);

  useEffect(() => {
    const fetchCategoryData = () => {
      if (componentIsMounted.current) {
        setObjCategory(objFound);
      } else {
        setObjCategory(objFound);
      }
    };
    fetchCategoryData();
    return () => {
      componentIsMounted.current = false;
    };
  }, [categories, id, objFound]);

  if (objCategory) {
    return (
      <PageTemplate>
        <PageTitle title={objCategory.title} />
        <BackButton onClick={handleBackHome} text="Back home" />

        <BannerInfo displayBanner={displayBanner} />
        <Products products={objCategory.data} />
      </PageTemplate>
    );
  }
  return null;
};

export default Category;
