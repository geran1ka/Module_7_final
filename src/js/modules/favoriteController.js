import {main} from '../helper/const.js';
import { createElement } from '../helper/createElement.js';
import {createBreadCrumbs} from './bread/createBreadCrumbs.js';
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
  createBreadCrumbs();
  const listId = getFavorite();
  console.log('listId: ', listId);
  const list = renderProductList(null, listId);
  console.log('list fav: ', list);
  list.map(item => item.style.display = 'flex');
  const goods = renderGoods('Избранное', list);
  goods ?
  main?.append(goods) :
  main?.append(
      createElement('section', {
        className: 'favorite',
      }, {
        append: createElement('div', {
          className: 'favorite__container container',
        }, {
          append: createElement('h2', {
            className: 'favorite__title title-2',
            textContent: `В избранном ничего нет`,
          }),
        }),
      }),
  );
};
