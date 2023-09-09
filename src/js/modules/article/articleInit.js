import {main} from '../../helper/const.js';
import {getDataArticle} from '../serviceAPI.js';
import {renderArticle} from './renderArticle.js';

export const articleInit = async (currentLocation) => {
  const idU = currentLocation?.hashString.split('/')[1];

  const article = await getDataArticle(renderArticle, idU);
  main.textContent = '';
  main?.append(article);
};
