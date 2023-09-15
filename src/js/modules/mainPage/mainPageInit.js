import {main} from '../../helper/const.js';
import {createHero} from './createHero.js';
import {crteatePromoCards} from './createPromoCards.js';
import {goodsDiscountInit} from './goodsDiscountInit.js';
import {createTimer} from './createTimer.js';

export const mainPageInit = async () => {
  const timer = createTimer();
  const hero = createHero(timer);

  const promo = crteatePromoCards();
  const goodsDiscount = await goodsDiscountInit();
  main.textContent = '';
  main.append(hero, promo, goodsDiscount);
};
