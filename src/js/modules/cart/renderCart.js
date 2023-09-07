import {createCart} from './createCart.js';
import {main} from '../../helper/const.js';
import {createDelivery} from './createDelivery.js';
import {createElement} from '../../helper/createElement.js';
import {createInfo} from './createInfo.js';

export const renderCart = (cartArray) => {
  main.textContent = '';
  if (cartArray.length === 0) {
    return createElement('section', {
      className: 'shop',
    }, {
      parent: main,
      append: createElement('div', {
        className: 'container',
      }, {
        append: createElement('h2', {
          className: 'goods__title title-2',
          textContent: 'В корзине ничего нет...',
        }),
      }),
    });
  }
  // const cart = createCart(cartArray);
  const delivery = createDelivery(cartArray);
  const info = createInfo(cartArray);
  const cart = createCart(cartArray);


  return createElement('section', {
    className: 'shop',
  }, {
    parent: main,
    append: createElement('div', {
      className: 'container shop__container',
    }, {
      appends: [
        cart,
        delivery,
        info,
      ],
    }),
  });
};
