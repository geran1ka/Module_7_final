import {addMainContent} from '../../helper/addMainContent.js';
import {getEmptyData} from '../../helper/getEmptyData.js';
import {renderGoods} from '../goods/renderGoods.js';
import {renderProductList} from '../product/renderProductList.js';
import {getFavorite} from './favoriteController.js';


export const favoriteInit = async () => {
  const list = renderProductList(null, getFavorite());
  list.map(item => item.style.display = 'flex');
  const goods = renderGoods('Избранное', list);
  goods ? addMainContent(goods) : addMainContent(getEmptyData('favorite', 'В избранном ничего нет ...'));
};
