import { main } from '../../helper/const.js';
import {createElement} from '../../helper/createElement.js';

const heroInit = () => createElement('section', {
  className: 'hero',
  innerHTML: `
      <div class="container hero__container">
        <div class="hero__content">
          <h1 class="title visually-hidden ">ShopOnline</h1>
          <p class="hero__title">-50% на все ноутбуки</p>
          
          <div class="hero__timer timer timer_disabled" data-deadline ="2023/08/28 17:29">

          </div>
        </div>
      </div>
    `,
});

const promoCardsInit = () => createElement('section', {
  className: 'promo-cards',
  innerHTML: `
      <div class="container promo-cards__container">
        <h2 class="subtitle visually-hidden ">Промо акции</h2>
        <ul class="promo-cards__list">
          <li class="promo-cards__item promo-cards__item_symm-rows">
            <a href="#" class="promo-card__link promo-card__link_card-one" 
              style="background-image: url('./img/block-1.jpg');
                background-image: image-set(
                  url('.img/block-1.avif'),
                  url('./img/block-1.webp'),
                  url('./img/block-1.jpg')
                );
                background-image: -webkit-image-set(
                  url('./img/block-1.avif'),
                  url('./img/block-1.webp'),
                  url('./img/block-1.jpg')
                );">
              <p class="promo-card__subitle">
                <span class="">Книга</span> – лучший подарок
              </p>
            </a>
            <a href="#" class="promo-card__link promo-card__link_card-two" 
              style="background-image: url('./img/block-2.jpg');
                background-image: image-set(
                  url('.img/block-2.avif'),
                  url('./img/block-2.webp'),
                  url('./img/block-2.jpg')
                );
                background-image: -webkit-image-set(
                  url('./img/block-2.avif'),
                  url('./img/block-2.webp'),
                  url('./img/block-2.jpg')
                );
              ">
              <p class="promo-card__subitle ">Время скидок! 
                <span class="discount">-25%</span>
              </p>
            </a>
            <a href="#" class="promo-card__link promo-card__link_card-three promo-card__link_two-colums" 
              style="background-image: url('./img/block-3.jpg');
                background-image: image-set(
                  url('.img/block-3.avif'),
                  url('./img/block-3.webp'),
                  url('./img/block-3.jpg')
                );
                background-image: -webkit-image-set(
                  url('./img/block-3.avif'),
                  url('./img/block-3.webp'),
                  url('./img/block-3.jpg')
                );
              ">
              <p class="promo-card__subitle ">
                <span class="discount">-40%</span>
              </p>
            </a>
          </li>
          <li class="promo-cards__item promo-cards__item_asymm-rows-big">
            <a href="#" class="promo-card__link promo-card__link_card-four promo-card__link_two-colums promo-card__link_two-rows " 
              style="background-image: url('./img/block-4.jpg');
                background-image: image-set(
                  url('.img/block-4.avif'),
                  url('./img/block-4.webp'),
                  url('./img/block-4.jpg')
                );
                background-image: -webkit-image-set(
                  url('./img/block-4.avif'),
                  url('./img/block-4.webp'),
                  url('./img/block-4.jpg')
                );
              ">
              <p class="promo-card__subitle ">Вторая пара кроссовок 
                <span>в&nbsp;подарок!</span>
              </p>
            </a>
          </li>
          <li class="promo-cards__item promo-cards__item_symm-rows">
            <a href="#" class="promo-card__link promo-card__link_card-five promo-card__link_two-colums" 
              style="background-image: url('./img/block-5.jpg');
                background-image: image-set(
                  url('.img/block-5.avif'),
                  url('./img/block-5.webp'),
                  url('./img/block-5.jpg')
                );
                background-image: -webkit-image-set(
                  url('./img/block-5.avif'),
                  url('./img/block-5.webp'),
                  url('./img/block-5.jpg')
                );
              ">
              <p>Идеи новогодних подарков</p>
            </a>
            <a href="#" class="promo-card__link promo-card__link_card-six promo-card__link_two-colums" 
              style="background-image: url('./img/block-6.jpg');
                background-image: image-set(
                  url('.img/block-6.avif'),
                  url('./img/block-6.webp'),
                  url('./img/block-6.jpg')
                );
                background-image: -webkit-image-set(
                  url('./img/block-6.avif'),
                  url('./img/block-6.webp'),
                  url('./img/block-6.jpg')
                );
              ">
              <p class="promo-card__subitle ">Выгодно в декабре!
                <span class="discount">-15%</span>
              </p>
            </a>
          </li>
          <li class="promo-cards__item promo-cards__item_two-colums">
            <a href="#" class="promo-card__link promo-card__link_card-seven promo-card__link_two-colums promo-card__link_two-rows"  
              style="background-image: url('./img/block-7.jpg');
                background-image: image-set(
                  url('.img/block-7.avif'),
                  url('./img/block-7.webp'),
                  url('./img/block-7.jpg')
                );
                background-image: -webkit-image-set(
                  url('./img/block-7.avif'),
                  url('./img/block-7.webp'),
                  url('./img/block-7.jpg')
                );
              ">
              <p class="promo-card__subitle">
                <span>Новогодние украшения</span>
              </p>
            </a>
          </li>
          <li class="promo-cards__item promo-cards__item_asymm-rows-small">
            <a href="#" class="promo-card__link promo-card__link_card-eight promo-card__link_two-rows" 
              style="background-image: url('./img/block-8.jpg');
                background-image: image-set(
                  url('.img/block-8.avif'),
                  url('./img/block-8.webp'),
                  url('./img/block-8.jpg')
                );
                background-image: -webkit-image-set(
                  url('./img/block-8.avif'),
                  url('./img/block-8.webp'),
                  url('./img/block-8.jpg')
                );
              ">
              <p class="promo-card__subitle">
                <span class="discount">-55%</span>
              </p>
            </a>
            <a href="#" class="promo-card__link promo-card__link_card-nain"  
              style="background-image: url('./img/block-9.jpg');
                background-image: image-set(
                  url('.img/block-9.avif'),
                  url('./img/block-9.webp'),
                  url('./img/block-9.jpg')
                );
                background-image: -webkit-image-set(
                  url('./img/block-9.avif'),
                  url('./img/block-9.webp'),
                  url('./img/block-9.jpg')
                );
              ">
              <p class="promo-card__subitle">На бытовую химию 
                <span class="discount">-25%</span>
              </p>
            </a>
            <a href="#" class="promo-card__link promo-card__link_card-ten"  
              style="background-image: url('./img/block-10.jpg');
                background-image: image-set(
                  url('.img/block-10.avif'),
                  url('./img/block-10.webp'),
                  url('./img/block-10.jpg')
                );
                background-image: -webkit-image-set(
                  url('./img/block-10.avif'),
                  url('./img/block-10.webp'),
                  url('./img/block-10.jpg')
                );
              ">
              <p class="promo-card__subitle"></p>
            </a>
          </li>
        </ul>    
      </div>
    `,
});

const goodsDiscountInit = () => createElement('section', {
  className: 'goods-discount',
  innerHTML: `
      <div class="goods-discount__container container">
        <h2 class="goods-discount__title title-2">Это выгодно!</h2>
        <ul class="goods-discount__list">
          <li class="goods-discount__item">
            <article class="card">
              <h3 class="card__title">Пара футболок</h3>
              <a href="#card" class="card__img-wrapper">
                <picture>
                  <source srcset="./img/goods/photoOne.avif" type="image/avif">
                  <source srcset="./img/goods/photoOne.webp" type="image/webp">
                  <img class="card__img" loading="lazy" src="./img/goods/photoOne.jpg" alt="Пара футболок" width="420px" height="295px">
                </picture>
                <span class="card__discount discount">-50%</span>
              </a>
  
              <div class="card__price-wrapper">
                <p class="card__price">1299 ₽</p>
                <p class="card__price-discount">2598 ₽</p>
              </div>  
            </article>
          </li>
        </ul>
      </div>
    `,
});

export const mainPage = () => {
  main.textContent = '';
  const hero = heroInit();
  const promo = promoCardsInit();
  const goodsDiscount = goodsDiscountInit();

  main.append(hero, promo, goodsDiscount);
};
