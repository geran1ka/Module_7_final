import {API_URL_POST, main} from '../../helper/const.js';
import {getDataArticle} from '../serviceAPI.js';
import {renderArticle} from './renderArticle.js';

export const articleInit = async (currentLocation) => {
  const idU = currentLocation?.queryString.slice(3);
  const data = await getDataArticle(API_URL_POST, idU);
  const article = await renderArticle(data);
  main.textContent = '';
  main?.append(article);
};
