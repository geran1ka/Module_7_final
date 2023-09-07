import {catalogListFooter, catalogListHeader} from '../../helper/const.js';
import {createElement} from '../../helper/createElement.js';

const createItemCatalogMenu = (title) => {
  const li = createElement('li', {
    className: 'menu__catalog-item',
  }, {
    append: createElement('a', {
      className: 'menu__catalog-link',
      href: `#shop/${title}`,
      textContent: title,
    }, {
      cb(elem) {
        elem.addEventListener('click', () => {
          console.log('clicl3');
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
    return catalogListHeader.append(...array.map(item => createItemCatalogMenu(item.category)));
  }
  return;
};

export const renderMenuCatalogFooter = (array) => {
  catalogListFooter.textContent = '';
  return catalogListFooter.append(...array.map(item => createItemCatalogMenu(item.category)));
};

