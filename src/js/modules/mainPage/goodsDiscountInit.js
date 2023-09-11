import {renderGoods} from '../goods/renderGoods.js';
import {renderDiscountList} from '../product/renderDiscountListNew.js';
import {getGoodsDiscount} from '../serviceAPI.js';

export const goodsDiscountInit = async () => {
  const list = await getGoodsDiscount(renderDiscountList);
  console.log('list: ', list);

  return renderGoods('Это выгодно!', list);
};
