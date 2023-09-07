import {main} from '../helper/const.js';
import {renderGoods} from './goods/renderGoods.js';
import {renderProductList} from './product/renderProductList.js';

export const getFavorite = () => JSON.parse(localStorage.getItem('favorite') || '[]');

export const addFavorite = async (data) => {
  const favoriteList = getFavorite();

  if (!favoriteList.length) favoriteList.push(data);

  if (favoriteList.find(item => item.id === data.id) === undefined) favoriteList.push(data);

  localStorage.setItem('favorite', JSON.stringify(favoriteList));
};

export const removeFavorite = (id) => {
  const favoriteList = getFavorite();
  const index = favoriteList.findIndex(item => item.id === id);
  if (index === -1) return;
  favoriteList.splice(index, 1);
  localStorage.setItem('favorite', JSON.stringify(favoriteList));
};

export const favoriteController = async () => {
  main.textContent = '';
  const listId = getFavorite();
  const list = renderProductList(null, listId);
  const goods = renderGoods('Избранное', list);
  main?.append(goods);
};
