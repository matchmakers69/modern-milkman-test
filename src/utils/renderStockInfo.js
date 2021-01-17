export const showStockInfo = stock => {
  let inStock = 0;

  switch (true) {
    case stock > 10:
      inStock = 'In stock';
      break;

    case stock > 0 && stock <= 10:
      inStock = 'Few left';
      break;

    case stock === 0:
      inStock = 'Out of stock';
      break;
    default:
      inStock = null;
  }
  return inStock;
};
