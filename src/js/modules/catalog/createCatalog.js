import {createElement} from '../../helper/createElement.js';

export const createCatalog = (list) => createElement('section', {
  className: 'catalog',
}, {
  append: createElement('div', {
    className: 'catalog__container container',
  }, {
    appends: [
      createElement('h2', {
        className: 'catalog__title title-2',
        textContent: 'Каталог',
      }),
      createElement('ul', {
        className: 'catalog__list',
      }, {
        appends: [...list],
      }),
    ],
  }),
});
