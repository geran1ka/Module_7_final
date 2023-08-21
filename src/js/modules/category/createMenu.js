import {createElement} from '../../helper/CreateElement.js';

const createMenuItem = (title) => {
  const li = createElement('li', {
    className: 'menu__catalog-item',
  }, {
    append: createElement('a', {
      className: 'menu__catalog-link',
      href: '#',
      textContent: title,
    }),
  });
  return li;
};

export const createMenuList = (err, array) => {
  if (err) {
    console.log(err);
    return;
  }
  return array.map(item => createMenuItem(item));
};

