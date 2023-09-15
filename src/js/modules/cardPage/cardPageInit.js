import {addMainContent} from '../../helper/addMainContent.js';
import {getGoodsId} from '../serviceAPI.js';
import {renderCard} from './renderCard.js';

export const cardPageInit = async (id) => addMainContent(await getGoodsId(renderCard, id), true);

