import {addMainContent} from '../helper/addMainContent.js';
import {search, searchForm} from '../helper/const.js';
import {getEmptyData} from '../helper/getEmptyData.js';
import {renderGoods} from './goods/renderGoods.js';
import {mainPageInit} from './mainPage/mainPageInit.js';
import {renderProductList} from './product/renderProductList.js';
import {getDataSearch} from './serviceAPI.js';

export const searchController = () => {
  let delay;
  searchForm.addEventListener('input', (e) => {
    e.preventDefault();
    clearTimeout(delay);
    delay = setTimeout(async () => {
      const list = await getDataSearch(renderProductList, search.value);
      const productSearch = renderGoods(`По вашему запросу ${search.value} найдены следующие товары:`, list);
      productSearch ?
        addMainContent(productSearch) :
        addMainContent(getEmptyData('search', `По вашему запросу ${search.value} ничего ненайдено`));
      if (search.value.length === 0) {
        mainPageInit();
      }
    }, 300);
  });
};
