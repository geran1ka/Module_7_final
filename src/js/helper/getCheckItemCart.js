import {getCart} from '../modules/cart/cartController.js';

export const getCheckItemCart = (id) => {
  const listCart = getCart();
  return listCart.some(item => item.id === id);
};
