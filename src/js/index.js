import {articleInit} from './modules/article/articleInit.js';
import {blogInit} from './modules/blog/blogInit.js';
import { cardPageInit } from './modules/cardPage/cardPageInit.js';
import {renderMenuCatalog} from './modules/category/renderMenuCatalog.js';
import {controllAccordeon, menuControll} from './modules/menu&accControl.js';
import {timerInit} from './modules/timer/timerInit.js';

const init = async () => {
  renderMenuCatalog();
  menuControll();
  timerInit();
  controllAccordeon();

  blogInit();

  articleInit();

  cardPageInit();
};

init();
