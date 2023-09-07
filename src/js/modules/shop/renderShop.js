import {createElement} from '../../helper/createElement.js';
import {getGoodsCategory} from '../serviceAPI.js';
import {renderProductList} from '../product/renderProductList.js';

export const renderShop = (category) => {
  const section = createElement('section', {
    className: 'category-goods goods-discount',
  });

  const container = createElement('div', {
    className: 'container category-goods__container goods-discount__container',
  });

  const title = createElement('h2', {
    className: 'category-goods__title title-2 goods-discount__title',
    textContent: category,
  });

  const categoryGoodsList = createElement('ul', {
    className: 'category-goods__list goods-discount__list',
  });

  container.append(title, categoryGoodsList);
  section.append(container);

  getGoodsCategory(renderProductList, category)
      .then(array => categoryGoodsList.append(...array));

  return section;
};
