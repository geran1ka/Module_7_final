import {renderMenu} from './modules/category/controllMenu.js';
import {controllAccordeon, menuControll} from './modules/menu&accControl.js';
import {timerInit} from './modules/timer/timerInit.js';

const init = () => {
  renderMenu();
  menuControll();
  timerInit();
  controllAccordeon();
};

init();
