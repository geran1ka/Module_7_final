import {createElement} from '../../helper/createElement.js';

export const createAside = () => createElement('aside', {
  className: 'aside',
}, {
  append: createElement('div', {
    className: 'aside-container',
  }, {
    appends: [
      createElement('div', {
        className: 'aside__block-one',
        innerHTML: `
            <h2 class="aside__title"><a href="#">Горящие туры в Стамбул от 20 000 руб.</a></h2>
            <p class="aside__description">Окунись в настоящую восточную сказку</p>
          `,
      }),
      createElement('div', {
        className: 'aside__block-two',
        innerHTML: `
            <h2 class="aside__title"><a href="#">Новый RENAULT DUSTER</a></h2>
            <p class="aside__description">Легендарный внедорожник в новом дизайне</p>
          `,
      }),
    ],
  }),
});
