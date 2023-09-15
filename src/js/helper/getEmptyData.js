import {createElement} from './createElement.js';

export const getEmptyData = (className, text) => createElement('section', {
  className,
}, {
  append: createElement('div', {
    className: `${className}__container container`,
  }, {
    append: createElement('h2', {
      className: `${className}__title title-2`,
      textContent: text,
    }),
  }),
});
