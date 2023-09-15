import {catalogListFooter, catalogListHeader} from '../../helper/const.js';
import {createItemCatalogMenu} from './createItemCatalogMenu.js';

const renderMenuCatalogHeader = (array, render) => {
  if (render) {
    catalogListHeader.textContent = '';
    render = false;
    return catalogListHeader.append(...array.sort().map(item => createItemCatalogMenu(item)));
  }
  return;
};

const renderMenuCatalogFooter = (array) => {
  catalogListFooter.textContent = '';
  return catalogListFooter.append(...array.sort().map(item => createItemCatalogMenu(item)));
};

export const menuCatalogInit = (array) => {
  const render = true;
  renderMenuCatalogHeader(array, render);
  renderMenuCatalogFooter(array);

  return;
};

