import {URL} from '../../helper/const.js';
import {createElement} from '../../helper/createElement.js';
import {createError} from '../../helper/createError.js';
import {dateDelivery} from '../../helper/dateDelivery.js';
import {loanCalculation} from '../../helper/loanСalculation.js';
import {overlayImgLoad} from '../../helper/overlayLoadImg.js';
import {createBreadCrumbs} from '../bread/createBreadCrumbs.js';
import {createCard} from './createCard.js';

export const renderCard = (err, data) => {
  if (err) {
    console.warn(err);
    createError(err);
    return;
  }

  createBreadCrumbs(data);
  const preload = overlayImgLoad();
  const card = createCard(preload, data);
  return card;
};

