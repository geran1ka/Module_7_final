import {createElement} from '../../helper/createElement.js';

export const createCategoryGoods = (category) => {
  const categoryGoodsList = createElement('ul', {
    className: 'category-goods__list',
  });

  const section = createElement('section', {
    className: 'category-goods',
  }, {
    append: createElement('div', {
      className: 'container category-goods__container',
    }, {
      appends: [
        createElement('h2', {
          className: 'category-goods__title title-2',
          textContent: category,
        }),
        categoryGoodsList,
      ],
    }),
  });
  return {section, categoryGoodsList};
};
