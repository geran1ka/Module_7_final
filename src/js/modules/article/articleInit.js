import {addMainContent} from '../../helper/addMainContent.js';
import {getDataArticle} from '../serviceAPI.js';
import {renderArticle} from './renderArticle.js';

export const articleInit = async (currentLocation) => {
  const idU = currentLocation?.hashString.split('/')[1];
  addMainContent(await getDataArticle(renderArticle, idU));
};
