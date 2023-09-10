import {createElement} from '../../helper/createElement.js';
import {getGoodsCategory} from '../serviceAPI.js';
import {renderProductList} from '../product/renderProductList.js';

export const renderShop = (category) => {
  const section = createElement('section', {
    className: 'category-goods',
  });

  const container = createElement('div', {
    className: 'container category-goods__container',
  });

  const title = createElement('h2', {
    className: 'category-goods__title title-2',
    textContent: category,
  });

  const categoryGoodsList = createElement('ul', {
    className: 'category-goods__list',
  });

  container.append(title, categoryGoodsList);
  section.append(container);

  getGoodsCategory(renderProductList, category)
      .then(array => categoryGoodsList.append(...array));

  return section;
};
