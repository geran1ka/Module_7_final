import {main} from '../../helper/const.js';
import {renderGoods} from '../goods/renderGoods.js';
import {renderProductList} from '../product/renderProductList.js';
import {getGoodsDiscount} from '../serviceAPI.js';

export const goodsDiscountInit = async () => {
  const list = await getGoodsDiscount(renderProductList);

  return renderGoods('Это выгодно!', list);
};
