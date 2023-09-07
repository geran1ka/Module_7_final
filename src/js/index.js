import {URL, cartCountItem, main} from './helper/const.js';
import {createElement} from './helper/createElement.js';
import {fetchRequest} from './helper/fetchRequest.js';
import { getTotalCountProduct } from './helper/getTotalCountProduct.js';
import {articleInit} from './modules/article/articleInit.js';
import {blogInit} from './modules/blog/blogInit.js';
import {cardPageInit} from './modules/cardPage/cardPageInit.js';
import { cartController, getCart } from './modules/cart/cartController.js';
// import {renderCart} from './modules/cart/renderCart.js';
import {renderMenuCatalogFooter, renderMenuCatalogHeader} from './modules/category/renderMenuCatalog.js';
import {favoriteController} from './modules/favoriteController.js';
import {goodsInit} from './modules/goods/goodsInit.js';
import {mainPage} from './modules/mainPage/mainPage.js';
import {controllAccordeon, menuControll} from './modules/menu&accControl.js';
import { searchController } from './modules/searchController.js';
import {shopInit} from './modules/shop/shopInit.js';
import {timerInit} from './modules/timer/timerInit.js';
import {router} from './router.js';


const init = async () => {
  try {
    const data = await fetchRequest(`${URL}/api/goods/category/`, {method: 'get'});
    let flag = true;
    router.on('*', () => {
      if (flag) {
        cartCountItem.textContent = getTotalCountProduct(getCart());
        renderMenuCatalogHeader(data, true);
        renderMenuCatalogFooter(data);
        searchController();
        menuControll();
        timerInit();
        controllAccordeon();
        flag = false;
      }
    });

    router.on('/', () => {
      mainPage();
    });

    router.on('blog', () => {
      const currentLocation = router.getCurrentLocation();
      blogInit(currentLocation);
    });

    router.on('blog/article', () => {
      const currentLocation = router.getCurrentLocation();
      articleInit(currentLocation);
    });

    router.on('shop/:category/:id', () => {
      const hash = decodeURIComponent(window.location.hash).split('/');
      cardPageInit(hash[hash.length - 1]);
      goodsInit(hash);
    });

    router.on('shop/:category', () => {
      const hash = decodeURIComponent(window.location.hash).split('/');
      shopInit(hash[hash.length - 1]);
    });

    router.on('shop/cart', () => {
      cartController();
    });

    router.on('favorite', favoriteController);
  } catch (e) {
    console.warn(e);
    createElement(
        'h2',
        {
          textContent: 'Что-то пошло не так, попробуйте позже...',
        },
        {
          parent: main,
          cb(h2) {
            h2.style.textAlign = 'center';
          },
        },
    );
  } finally {
    router.resolve();
  }
};

init();
