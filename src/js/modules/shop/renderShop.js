import {getGoodsCategory} from '../serviceAPI.js';
import {renderProductList} from '../product/renderProductList.js';
import {createCategoryGoods} from './createCategoryGoods.js';

export const renderShop = (category) => {
  const {section, categoryGoodsList} = createCategoryGoods(category);

  getGoodsCategory(renderProductList, category)
      .then(array => categoryGoodsList.append(...array));

  return section;
};
