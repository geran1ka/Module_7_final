import {URL, cartCountItem, main} from './helper/const.js';
import {createError} from './helper/createError.js';
import {fetchRequest} from './helper/fetchRequest.js';
import {getTotalCountProduct} from './helper/getTotalCountProduct.js';
import {articleInit} from './modules/article/articleInit.js';
import {blogInit} from './modules/blog/blogInit.js';
import { breadInit } from './modules/bread/breadInit.js';
import { createBreadCrumbs } from './modules/bread/createBreadCrumbs.js';
import {cardPageInit} from './modules/cardPage/cardPageInit.js';
import {cartController, getCart} from './modules/cart/cartController.js';
import {renderMenuCatalogFooter, renderMenuCatalogHeader} from './modules/category/renderMenuCatalog.js';
import {categoryController} from './modules/categoryController.js';
import {favoriteController} from './modules/favoriteController.js';
import {goodsInit} from './modules/goods/goodsInit.js';
import {mainPage} from './modules/mainPage/mainPage.js';
import {controllAccordeon, menuControll} from './modules/menu&accControl.js';
import {profileController} from './modules/profile/profileController.js';
import {searchController} from './modules/searchController.js';
import {shopInit} from './modules/shop/shopInit.js';
import {timerInit} from './modules/timer/timerInit.js';
import {router} from './router.js';


const init = async () => {
  try {
    const data = await fetchRequest(`${URL}/api/category/`, {method: 'get'});
    let flag = true;
    router.on('*', () => {
      createBreadCrumbs();
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

    router.on('/', mainPage);

    router.on('blog', blogInit);

    router.on('blog/:id', articleInit);

    router.on('catalog/:category/:id', () => {
      const currentLocation = router.getCurrentLocation();
      const hash = decodeURIComponent(currentLocation.hashString).split('/');

      cardPageInit(hash[hash.length - 1]);
      goodsInit(hash);
    });

    router.on('catalog/:category', () => {
      const currentLocation = router.getCurrentLocation();
      const hash = decodeURIComponent(currentLocation.hashString).split('/');
      shopInit(hash[hash.length - 1]);
    });

    router.on('catalog', categoryController);

    router.on('cart', cartController);

    router.on('favorite', favoriteController);

    router.on('profile', profileController);
  } catch (e) {
    console.warn(e);
    main?.append(createError(e));
  } finally {
    router.resolve();
  }
};

init();
