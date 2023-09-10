import {catalogListFooter, catalogListHeader} from '../../helper/const.js';
import {createElement} from '../../helper/createElement.js';

const createItemCatalogMenu = (title) => {
  const li = createElement('li', {
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
  return li;
};

let render = true;

export const renderMenuCatalogHeader = (array) => {
  if (render) {
    catalogListHeader.textContent = '';
    render = false;
    return catalogListHeader.append(...array.sort().map(item => createItemCatalogMenu(item)));
  }
  return;
};

export const renderMenuCatalogFooter = (array) => {
  catalogListFooter.textContent = '';
  return catalogListFooter.append(...array.sort().map(item => createItemCatalogMenu(item)));
};

