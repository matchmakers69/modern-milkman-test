import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Layout from 'Layout';
import { useSelector } from 'react-redux';

const Category = () => {
  const {
    categoriesState: { categories },
  } = useSelector(state => state);
  const componentIsMounted = useRef(true);
  const [objCategory, setObjCategory] = useState(null);
  const { id } = useParams();
  const objFound = categories.find(item => item.id === parseInt(id, 10));
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
      <Layout>
        <div>Hello I am category {objCategory.title}</div>
      </Layout>
    );
  }
  return null;
};

export default Category;
