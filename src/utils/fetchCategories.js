import axios from 'axios';
import { CATEGORIES_URL } from 'api/api';

export const fetchCategories = async () => {
  const response = await axios.get(CATEGORIES_URL);
  return response.data;
};
