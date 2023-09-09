import {createError} from '../../helper/createError.js';
import {createProduct} from './createProduct.js';

export const renderProductList = (err, array) => {
  if (err) {
    console.warn(err);
    createError(err);
    return;
  }
  return array.map(item => createProduct(item));
};
