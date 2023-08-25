import {createElement} from '../../helper/createElement.js';
import {getGoodsCategory} from '../serviceAPI.js';
import {createGoodsItem} from './createGoodsItem.js';

const render = (err, array) => {
  if (err) console.warn(err);

  const list = array.map(item => createGoodsItem(item));
  console.log('list: ', list);
  return list;
};


export const renderShop = async () => {
  const category = 'Игрушки';

  const section = createElement('section', {
    className: 'category-goods',
  });

  const container = createElement('div', {
    className: 'container category-goods__container',
  });

  const title = createElement('h2', {
    className: 'category-goods__title title-2',
    textContent: category,
  });

  const categoryGoodsList = createElement('ul', {
    className: 'category-goods__list',
  });

  container.append(title, categoryGoodsList);
  section.append(container);


  getGoodsCategory(render, category)
      .then(array => array.map(item => console.log(item)));
};


// category
// :
// "Игрушки"
// count
// :
// 1
// description
// :
// "Внедорожник на дистанционном управлении. Скорость 25км/ч. Возраст 7 - 14 лет"
// discount
// :
// 5
// id
// :
// "6300524222"
// image
// :
// "image/6300524222.jpg"
// price
// :
// 6000
// title
// :
// "Радиоуправляемый автомобиль Cheetan"
// units
// :
// "шт"
