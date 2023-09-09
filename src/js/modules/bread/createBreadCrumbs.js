import {headerBread} from '../../helper/const.js';
import {createElement} from '../../helper/createElement.js';
import {getArrHashString} from './getArrHashString.js';

export const changeNameItemBread = (item, obj) => {
  switch (item) {
    case 'catalog':
      item = 'Каталог';
      break;
    case 'cart':
      item = 'Корзина';
      break;
    case 'blog':
      item = 'Блог';
      break;
    case 'favorite':
      item = 'Избранное';
      break;
    case 'profile':
      item = 'Профиль';
      break;
    default:
      item;
  }

  if (typeof(+item) === 'number' && !isNaN(+item)) item = obj.title;

  return item;
};

export const createBreadCrumbs = (data = {}) => {
  const arrHashString = getArrHashString();

  const isEmpty = !!arrHashString[0];

  isEmpty ? headerBread.style.display = '' : headerBread.style.display = 'none';

  const breadList = createElement('ul', {
    className: 'bread__list',
  });

  createElement('li', {
    className: 'bread__item',
  }, {
    parent: breadList,
    append: createElement('a', {
      className: 'bread__link',
      href: '#',
      textContent: 'Главная',
    }),
  });

  const list = arrHashString.map((item, index, array) => createElement('li', {
    className: 'bread__item',
  }, {
    append: createElement('a', {
      className: 'bread__link',
      href: index === 0 ? `#${item}` : `#${array[index - 1]}/${item}`,
      textContent: changeNameItemBread(item, data),
    }),
  }));

  breadList.append(...list);
  headerBread.textContent = '';
  headerBread.append(breadList);
};

