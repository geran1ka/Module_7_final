import {createElement} from '../../helper/createElement.js';

export const createCatalogItem = (title) => createElement('li', {
  className: 'catalog__item',
}, {
  append: createElement('a', {
    className: 'catalog__link',
    href: `#catalog/${title}`,
    textContent: title,
  }, {
    cb(elem) {
      elem.addEventListener('click', () => {
        console.log('click');
      });
    },
  }),
});
