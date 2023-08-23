import {catalogList} from '../../helper/const.js';
import {getCategory} from '../serviceAPI.js';
import {createMenuList} from './createMenu.js';


export const renderMenu = () => {
  getCategory(createMenuList)
      .then(array => catalogList?.forEach(element => {
        element.append(...array);
      }));
};

