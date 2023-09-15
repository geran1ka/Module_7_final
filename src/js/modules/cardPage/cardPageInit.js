import {main} from '../../helper/const.js';
import {getGoodsId} from '../serviceAPI.js';
import {createCard} from './createCard.js';

export const cardPageInit = async (id) => {
  // const hash = decodeURIComponent(currentLocation.hashString).split('/');

  main.textContent = '';

  const cardItem = await getGoodsId(createCard, id);
  main?.prepend(cardItem);
};
