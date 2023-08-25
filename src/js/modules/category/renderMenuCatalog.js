import {catalogList} from '../../helper/const.js';
import {createElement} from '../../helper/createElement.js';
import {getCategory} from '../serviceAPI.js';

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

const createMenuList = (err, array) => {
  if (err) {
    alert(err);
    return;
  }
  return array.map(item => createItemCatalogMenu(item));
};

export const renderMenuCatalog = () => {
  getCategory(createMenuList)
      .then(array => {
        catalogList[0].textContent = '';
        catalogList[1].textContent = '';
        catalogList[0].append(...array);
        catalogList[1].append(catalogList[0].cloneNode(true));
      },
      );
};

