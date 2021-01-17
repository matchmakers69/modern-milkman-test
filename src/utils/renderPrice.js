export const renderPriceWithCurrency = price => {
  return `£ ${parseInt(price, 10).toFixed(2)}`;
};
