import {createElement} from '../../helper/createElement.js';

export const createHero = (timer) => createElement('section', {
  className: 'hero',
}, {
  append: createElement('div', {
    className: 'container hero__container',
  }, {
    append: createElement('div', {
      className: 'hero__content',
    }, {
      appends: [
        createElement('h1', {
          className: 'title visually-hidden',
          textContent: 'ShopOnline',
        }),
        createElement('p', {
          className: 'hero__title',
          textContent: '-50% на все ноутбуки',
        }),
        timer,
      ],
    }),
  }),
});
