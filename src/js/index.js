import {articleInit} from './modules/article/articleInit.js';
import {blogInit} from './modules/blog/blogInit.js';
import {cardPageInit} from './modules/cardPage/cardPageInit.js';
import {renderMenuCatalog} from './modules/category/renderMenuCatalog.js';
import {mainPage} from './modules/mainPage/mainPage.js';
import {controllAccordeon, menuControll} from './modules/menu&accControl.js';
import {renderShop} from './modules/shop/renderShop.js';
import {shopInit} from './modules/shop/shopInit.js';
import {timerInit} from './modules/timer/timerInit.js';
import {router} from './router.js';

router.on('*', () => {
  renderMenuCatalog();
  menuControll();
  renderShop();
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
  articleInit();
});

router.on('card/:id', () => {
  const hash = decodeURIComponent(window.location.hash).split('/');
  cardPageInit(hash[1]);
});

router.on('shop/:category', () => {
  const hash = decodeURIComponent(window.location.hash).split('/');
  shopInit(hash[1]);
});

router.resolve();


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
