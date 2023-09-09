import {main} from '../helper/const.js';
import {renderGoods} from './goods/renderGoods.js';
import {renderProductList} from './product/renderProductList.js';
import {getDataSearch} from './serviceAPI.js';

export const categoryController = async () => {
  const list = await getDataSearch(renderProductList);
  console.log('list: ', list);
  main.textContent = '';
  const productSearch = renderGoods(`Каталог`, list);
  main?.append(productSearch);
};
