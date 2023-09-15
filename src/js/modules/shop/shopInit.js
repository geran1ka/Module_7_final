import {addMainContent} from '../../helper/addMainContent.js';
import {renderShop} from './renderShop.js';

export const shopInit = (category) => addMainContent(renderShop(category), true);

