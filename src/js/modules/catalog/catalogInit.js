import {addMainContent} from '../../helper/addMainContent.js';
import {renderCatalog} from './renderCatalog.js';
import {getCategory} from '../serviceAPI.js';


export const catalogInit = async () => addMainContent(await getCategory(renderCatalog));

