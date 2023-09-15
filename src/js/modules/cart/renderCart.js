import {createCart} from './createCart.js';
import {createDelivery} from './createDelivery.js';
import {createElement} from '../../helper/createElement.js';
import {createInfo} from './createInfo.js';
import {getEmptyData} from '../../helper/getEmptyData.js';

export const renderCart = (cartArray) => {
  if (cartArray.length === 0) {
    return getEmptyData('shop', 'В корзине ничего нет...');
  }

  const delivery = createDelivery(cartArray);
  const info = createInfo(cartArray);
  const cart = createCart(cartArray);

  return createElement('section', {
    className: 'shop',
  }, {
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
