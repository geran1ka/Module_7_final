import {cartCountItem} from '../../helper/const.js';

export const getCart = () => JSON.parse(localStorage.getItem('cart') || '[]');

export const addCart = (data, count = 1) => {
  data.count = count;
  const cartList = getCart();

  if (!cartList.length) cartList.push(data);

  if (cartList.find(item => item.id === data.id) === undefined) cartList.push(data);
  cartCountItem.textContent = cartList.length;
  localStorage.setItem('cart', JSON.stringify(cartList));
};

export const removeCart = (id) => {
  const cartList = getCart();
  const index = cartList.findIndex(item => item.id === id);
  if (index === -1) return;
  cartList.splice(index, 1);
  cartCountItem.textContent = cartList.length;
  localStorage.setItem('cart', JSON.stringify(cartList));
};

