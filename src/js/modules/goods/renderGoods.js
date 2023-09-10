import {createElement} from '../../helper/createElement.js';

export const renderGoods = (title, list) => {
  if (list?.length !== 0) {
    return createElement('section', {
      className: 'goods',
    }, {
      append: createElement('div', {
        className: 'goods__container container',
      }, {
        appends: [
          createElement('h2', {
            className: 'goods__title title-2',
            textContent: title,
          }),
          createElement('ul', {
            className: 'goods__list',
          }, {
            appends: [...list],
          }),
        ],
      }),
    });
  }
  return false;
};
