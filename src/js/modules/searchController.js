import {main, search, searchForm} from '../helper/const.js';
import {createElement} from '../helper/createElement.js';
import {renderGoods} from './goods/renderGoods.js';
import {mainPage} from './mainPage/mainPage.js';
import {renderProductList} from './product/renderProductList.js';
import {getDataSearch} from './serviceAPI.js';

export const searchController = () => {
  let delay;
  searchForm.addEventListener('input', (e) => {
    e.preventDefault();
    clearTimeout(delay);
    delay = setTimeout(async () => {
      const list = await getDataSearch(renderProductList, search.value);
      main.textContent = '';
      const productSearch = renderGoods(`По вашему запросу ${search.value} найдены следующие товары:`, list);
      productSearch ?
        main?.append(productSearch) :
        main?.append(
            createElement('section', {
              className: 'search',
            }, {
              append: createElement('div', {
                className: 'search__container container',
              }, {
                append: createElement('h2', {
                  className: 'search__title title-2',
                  textContent: `По вашему запросу ${search.value} ничего ненайдено`,
                }),
              }),
            }),
        );
      if (search.value.length === 0) {
        mainPage();
      }
    }, 300);
  });
};
