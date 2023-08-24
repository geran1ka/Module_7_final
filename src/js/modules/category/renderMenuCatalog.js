import {catalogList} from '../../helper/const.js';
import {createElement} from '../../helper/createElement.js';
import {getCategory} from '../serviceAPI.js';

const createItemCatalogMenu = (title) => {
  const li = createElement('li', {
    className: 'menu__catalog-item',
  }, {
    append: createElement('a', {
      className: 'menu__catalog-link',
      href: '#',
      textContent: title,
    }),
  });
  return li;
};

const createMenuList = (err, array) => {
  if (err) {
    alert(err);
    return;
  }
  return array.map(item => createItemCatalogMenu(item));
};

export const renderMenuCatalog = () => {
  getCategory(createMenuList)
      .then(array => catalogList?.forEach(element => {
        element.append(...array);
      }));
};

