import {addMainContent} from '../../helper/addMainContent.js';
import {getCart} from './cartController.js';
import {renderCart} from './renderCart.js';

export const cartInit = () => addMainContent(renderCart(getCart()));
