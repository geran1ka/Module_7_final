import {main} from '../../helper/const.js';
import {renderShop} from './renderShop.js';

export const shopInit = (category) => {
  main.textContent = '';

  const shop = renderShop(category);
  main?.prepend(shop);
};
