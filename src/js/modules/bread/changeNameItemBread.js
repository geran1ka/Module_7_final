export const changeNameItemBread = (item, obj) => {
  if (item.includes('dist/index.html')) {
    return;
  }

  switch (item.split('?')[0]) {
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
