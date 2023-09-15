import {headerBread} from '../../helper/const.js';
import { createBreadCrumbs } from './createBreadCrumbs.js';
import {getArrURL} from './getArrHashString.js';

export const breadInit = () => {
  const arrUrl = getArrURL();
  console.log('arrUrl1: ', arrUrl);

  const isEmpty = !!arrUrl[0];

  isEmpty ? headerBread.style.display = '' : headerBread.style.display = 'none';

  createBreadCrumbs(arrUrl);
};
