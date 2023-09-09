import {main} from '../../helper/const.js';
import {createElement} from '../../helper/createElement.js';

export const profileController = () => {
  main.textContent = '';
  return createElement('section', {
    className: 'shop',
  }, {
    parent: main,
    append: createElement('div', {
      className: 'container',
    }, {
      append: createElement('h2', {
        className: 'goods__title title-2',
        textContent: 'Данная страница находится в разработке',
      }),
    }),
  });
};
