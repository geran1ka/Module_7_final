import {main} from '../helper/const.js';
import {createElement} from '../helper/createElement.js';
import {createError} from '../helper/createError.js';
import {getCategory} from './serviceAPI.js';

const createCatalog = (title) => {
  const li = createElement('li', {
    className: 'catalog__item',
  }, {
    append: createElement('a', {
      className: 'catalog__link',
      href: `#catalog/${title}`,
      textContent: title,
    }, {
      cb(elem) {
        elem.addEventListener('click', () => {
          console.log('click');
        });
      },
    }),
  });
  return li;
};

const renderCatalog = (err, array) => {
  if (err) {
    console.warn(err);
    createError(err);
    return;
  }

  const list = array.sort().map(item => createCatalog(item));

  return createElement('section', {
    className: 'catalog',
  }, {
    append: createElement('div', {
      className: 'catalog__container container',
    }, {
      appends: [
        createElement('h2', {
          className: 'catalog__title title-2',
          textContent: 'Каталог',
        }),
        createElement('ul', {
          className: 'catalog__list',
        }, {
          appends: [...list],
        }),
      ],
    }),
  });
};

export const categoryController = async () => {
  const catalog = await getCategory(renderCatalog);
  main.textContent = '';
  main?.append(catalog);
};
