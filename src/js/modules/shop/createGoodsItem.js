import { URL } from '../../helper/const.js';
import {createElement} from '../../helper/createElement.js';

export const createGoodsItem = (item) => {
  const li = createElement('li', {
    className: 'goods-item goods-discount__item',
  });

  const article = createElement('article', {
    className: 'card',
  }, {
    appends: [
      createElement('h3', {
        className: 'card__title',
        textContent: item.title,
      }),
      createElement('a', {
        className: 'card__img-wrapper',
        href: `#card/${item.id}`,
      }, {
        appends: [
          createElement('img', {
            className: 'card__img',
            loading: 'lazy',
            src: `${URL}/${item.image}`,
            alt: item.title,
            width: '420px',
            height: '295px',
          }),
          createElement('span', {
            className: item.discount ? 'card__discount discount' : 'none',
            textContent: item.discount ? `${item.discount}%` : '',
          }),
        ],
      }),
      createElement('div', {
        className: 'card__price-wrapper',
      }, {
        appends: [
          createElement('p', {
            className: 'card__price',
            textContent: item.discount ? (item.price - (item.price * item.discount / 100)) : item.price,
          }),
          createElement('p', {
            className: 'card__price-discount',
            textContent: item.discount ? item.price : '',
          }),
        ],
      }),
    ],
  });

  li.append(article);

  return li;
};
