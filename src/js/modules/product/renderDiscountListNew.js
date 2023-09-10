import {createError} from '../../helper/createError.js';
import {createProduct} from './createProduct.js';

export const renderDiscountList = (err, array) => {
  if (err) {
    console.warn(err);
    createError(err);
    return;
  }
  const newArray = [];
  array.map((item, index, array) => {
    const number = Math.round(Math.random() * array.length);
    if (index > 5) {
      return;
    }
    newArray.push(array.sort()[number]);
  });

  return newArray.map(item => createProduct(item));
};
