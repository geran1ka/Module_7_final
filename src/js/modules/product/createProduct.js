import {URL} from '../../helper/const.js';
import {createElement} from '../../helper/createElement.js';

export const createProduct = (item) => {
  const li = createElement('li', {
    className: 'goods__item',
    id: item.id,
  });

  const article = createElement('article', {
    className: 'product',
  }, {
    appends: [
      createElement('h3', {
        className: 'product__title',
        textContent: item.title,
      }),
      createElement('a', {
        className: 'product__img-wrapper',
        href: `#shop/${item.category}/${item.id}`,
      }, {
        appends: [
          createElement('img', {
            className: 'product__img',
            loading: 'lazy',
            src: item.image === 'image/notimage.jpg' ? '../../../img/notimage.jpg' : `${URL}/${item.image}`,
            alt: item.title,
            width: '420px',
            height: '295px',
          }),
          createElement('span', {
            className: item.discount ? 'product__discount discount' : 'none',
            textContent: item.discount ? `${item.discount}%` : '',
          }),
        ],
      }),
      createElement('div', {
        className: 'product__price-wrapper',
      }, {
        appends: [
          createElement('p', {
            className: 'product__price',
            textContent: item.discount ? `${(item.price - (item.price * item.discount / 100))} ₽` : `${item.price} ₽`,
          }),
          createElement('p', {
            className: 'product__price-discount',
            textContent: item.discount ? `${item.price} ₽` : '',
          }),
        ],
      }),
    ],
  });

  li.append(article);

  return li;
};
