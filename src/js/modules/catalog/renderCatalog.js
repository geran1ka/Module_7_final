import {createError} from '../../helper/createError.js';
import {createCatalog} from './createCatalog.js';
import {createCatalogItem} from './createCatalogItem.js';

export const renderCatalog = (err, array) => {
  if (err) {
    console.warn(err);
    createError(err);
    return;
  }

  const list = array.sort().map(item => createCatalogItem(item));

  return createCatalog(list);
};
