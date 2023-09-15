import {URL} from '../../helper/const.js';
import {createElement} from '../../helper/createElement.js';
import {overlayImgLoad} from '../../helper/overlayLoadImg.js';

export const createProduct = (item) => {
  if (!item) return;
  const preload = overlayImgLoad();

  return createElement('li', {
    className: 'goods__item',
    id: item.id,
  }, {
    append: createElement('article', {
      className: 'product',
    }, {
      appends: [
        createElement('h3', {
          className: 'product__title',
          textContent: item.title,
        }),
        createElement('a', {
          className: 'product__img-wrapper',
          href: `#catalog/${item.category}/${item.id}`,
        }, {
          appends: [
            preload,
            createElement('img', {
              className: 'product__img',
              loading: 'lazy',
              src: item.image === 'image/notimage.jpg' ? '../../../img/notimage.jpg' : `${URL}/${item.image}`,
              alt: item.title,
              width: '420',
              height: '295',
            }, {
              cb(elem) {
                elem.addEventListener('load', () => {
                  preload.remove();
                });
                elem.addEventListener('error', () => {
                  elem.setAttribute('src', '/img/no-photo.jpg');
                  preload.remove();
                });
              },
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
              textContent: item.discount ?
                `${Math.round(item.price - (item.price * item.discount / 100))} ₽` : `${item.price} ₽`,
            }),
            createElement('p', {
              className: 'product__price-discount',
              textContent: item.discount ? `${item.price} ₽` : '',
            }),
          ],
        }),
      ],
    }),
  });
};
