import {articleInit} from './modules/article/articleInit.js';
import {blogInit} from './modules/blog/blogInit.js';
import {cardPageInit} from './modules/cardPage/cardPageInit.js';
import {renderMenuCatalog} from './modules/category/renderMenuCatalog.js';
import {mainPage} from './modules/mainPage/mainPage.js';
import {controllAccordeon, menuControll} from './modules/menu&accControl.js';
import { renderShop } from './modules/shop/renderShop.js';
import {timerInit} from './modules/timer/timerInit.js';
import {router} from './router.js';

router.on('*', () => {
  renderMenuCatalog();
  menuControll();
  timerInit();
  controllAccordeon();
});

router.on('/', () => {
  mainPage();
});

router.on('blog.html', () => {
  blogInit();
});

router.on('article.html', () => {
  console.log('id');
  articleInit();
});

router.on('card', () => {
  cardPageInit();
});

router.resolve();

renderShop();


// const init = async () => {
//   renderMenuCatalog();
//   menuControll();
//   timerInit();
//   controllAccordeon();

//   blogInit();

//   articleInit();

//   cardPageInit();
// };

// init();
