import {main} from '../../helper/const.js';
import {renderProductList} from '../product/renderProductList.js';
import {getGoodsCategory} from '../serviceAPI.js';
import {renderGoods} from './renderGoods.js';

export const goodsInit = async ([, category, id]) => {
  const list = await getGoodsCategory(renderProductList, category);
  const listGoods = [];
  list.map(element => {
    if (element.id !== id) listGoods.push(element);
  });

  const goods = renderGoods('Рекомендуем также', listGoods);
  goods ? main?.append(goods) : '';
};
