import {createElement} from '../../helper/createElement.js';

export const createGoodsItem = (item) => {
  const li = createElement('li', {
    className: 'goods-item',
    id: item.id,
  });

  const article = createElement('article', {
    className: 'card',
  }, {
    appends: [
      createElement('h3', {
        className: 'card__title',
        textContent: item.title,
      }),
      createElement('a', {
        className: 'card__img-wrapper',
        href: '#',
      }, {
        appends: [
          createElement('picture', {
            appends: [
              createElement('source', {
                srcset: './img/goods/photoOne.avif',
                type: 'image/avif',
              }),
              createElement('source', {
                srcset: './img/goods/photoOne.webp',
                type: 'image/webp',
              }),
              createElement('img', {
                className: 'card__img',
                loading: 'lazy',
                src: item.image,
                alt: item.title,
                width: '420px',
                height: '295px',
              }),
            ],
          }),
          createElement('span', {
            className: item.discount ? 'card__discount discount' : 'none',
            textContent: item.discount ? `${item.discount}%` : '',
          }),
        ],
      }),
      createElement('div', {
        className: 'card__price-wrapper',
      }, {
        appends: [
          createElement('p', {
            className: 'card__price',
            textContent: item.discount ? (item.price - (item.price * item.discount / 100)) : item.price,
          }),
          createElement('p', {
            className: 'card__price-discount',
            textContent: item.discount ? item.price : '',
          }),
        ],
      }),
    ],
  });

  li.append(article);

  return li;
};

// export const createGoodsItem = (item) => {
//   return createElement('li', {
//     className: 'goods-item',
//     innerHTML: `
//       <article class="card">
//         <h3 class="card__title">${item.title}</h3>
//         <a href="./card.html" class="card__img-wrapper">
//           <picture>
//             <source srcset="./img/goods/photoOne.avif" type="image/avif">
//             <source srcset="./img/goods/photoOne.webp" type="image/webp">
//             <img class="card__img" loading="lazy" src="./img/goods/photoOne.jpg" alt="Пара футболок" width="420px" height="295px">
//           </picture>
//           <span class="card__discount discount">-50%</span>
//         </a>

//         <div class="card__price-wrapper">
//           <p class="card__price">1299 ₽</p>
//           <p class="card__price-discount">2598 ₽</p>
//         </div>
//       </article>
//     `,
//   })
// }
