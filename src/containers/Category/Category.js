import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import PageTemplate from 'templates/PageTemplate';
import { useSelector, useDispatch } from 'react-redux';
import { updateUI } from 'store/ui/actions';
import BannerInfo from 'components/common/BannerInfo';
import Products from 'components/Products/CategoryProducts';
import PageTitle from 'components/common/PageTitle';

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
        <BannerInfo displayBanner={displayBanner} />
        <Products products={objCategory.data} />
      </PageTemplate>
    );
  }
  return null;
};

export default Category;
