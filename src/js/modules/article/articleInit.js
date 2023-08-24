import {API_URL_POST} from '../../helper/const.js';
import {getDataArticle} from '../serviceAPI.js';
import {renderArticle} from './renderArticle.js';

export const articleInit = async () => {
  const pageArticle = document.querySelector('.article-page');
  const idU = window.location.search.slice(4);
  const data = await getDataArticle(API_URL_POST, idU);
  const article = await renderArticle(data);
  pageArticle?.append(article);
};
