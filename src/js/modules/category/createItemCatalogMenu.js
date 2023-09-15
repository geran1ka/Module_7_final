import {createElement} from '../../helper/createElement.js';

export const createItemCatalogMenu = (title) => createElement('li', {
  className: 'menu__catalog-item',
}, {
  append: createElement('a', {
    className: 'menu__catalog-link',
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

