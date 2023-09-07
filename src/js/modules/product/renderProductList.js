import {createProduct} from './createProduct.js';

export const renderProductList = (err, array) => {
  if (err) {
    console.warn(err);
    return;
  }
  return array.map(item => createProduct(item));
};
