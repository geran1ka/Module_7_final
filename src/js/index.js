import {URL, cartCountItem, main} from './helper/const.js';
import {createError} from './helper/createError.js';
import {fetchRequest} from './helper/fetchRequest.js';
import {getTotalCountProduct} from './helper/getTotalCountProduct.js';
import {articleInit} from './modules/article/articleInit.js';
import {blogInit} from './modules/blog/blogInit.js';
import {breadInit} from './modules/bread/breadInit.js';
import {cardPageInit} from './modules/cardPage/cardPageInit.js';
import {getCart} from './modules/cart/cartController.js';
import {cartInit} from './modules/cart/cartInit.js';
import {catalogInit} from './modules/catalog/catalogInit.js';
import {menuCatalogInit} from './modules/category/menuCatalogInit.js';
import {favoriteInit} from './modules/favorite/favoriteinit.js';
import {goodsInit} from './modules/goods/goodsInit.js';
import {mainPageInit} from './modules/mainPage/mainPageInit.js';
import {controllAccordeon, menuControll} from './modules/menu&accControl.js';
import {profileController} from './modules/profile/profileController.js';
import {searchController} from './modules/searchController.js';
import {shopInit} from './modules/shop/shopInit.js';
import {router} from './router.js';


const init = async () => {
  try {
    const data = await fetchRequest(`${URL}/api/category/`, {method: 'get'});
    let flag = true;
    router.on('*', () => {
      breadInit();
      if (flag) {
        cartCountItem.textContent = getTotalCountProduct(getCart());
        menuCatalogInit(data);
        searchController();
        menuControll();
        controllAccordeon();
        flag = false;
      }
    });

    router.on('/', mainPageInit);

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

    router.on('catalog', catalogInit);

    router.on('cart', cartInit);

    router.on('favorite', favoriteInit);

    router.on('profile', profileController);
  } catch (e) {
    console.warn(e);
    main?.append(createError(e));
  } finally {
    router.resolve();
  }
};

init();
