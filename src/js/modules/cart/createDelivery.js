import {URL} from '../../helper/const.js';
import {createElement} from '../../helper/createElement.js';
import {dateDelivery} from '../../helper/dateDelivery.js';

export const createDelivery = (cartArray) => {
  const itemImg = cartArray.map(item => createElement('li', {
    className: 'delivery__info-item',
    innerHTML: `
      <img src="${URL}/${item.image}" alt="${item.title}">
    `,
  }));

  const delivery = createElement('div', {
    className: 'shop__delivery delivery shop__style-all',
  }, {
    append: createElement('div', {
      className: 'delivery__container',
    }, {
      appends: [
        createElement('h2', {
          className: 'delivery__title title-2',
          textContent: 'Способ доставки',
        }),
        createElement('a', {
          className: 'delivery__link',
          href: '#profile',
          textContent: 'Изменить',
        }),
        createElement('div', {
          className: 'delivery__point-wrapper delivery__two-column delivery__row',
        }, {
          appends: [
            createElement('p', {
              className: 'delivery__point delivery__text-static',
              textContent: 'Пункт выдачи',
            }),
            createElement('p', {
              className: 'delivery__address delivery__text-dinamic',
              textContent: 'г. Москва (Московская область), улица Павлика Морозова, д. 48, (Пункт выдачи), Ежедневно 10:00-21:00',
            }),
          ],
        }),
        createElement('div', {
          className: 'delivery__price-wrapper delivery__two-column',
        }, {
          appends: [
            createElement('p', {
              className: 'delivery__price-info delivery__text-static',
              textContent: 'Стоимость доставки',
            }),
            createElement('p', {
              className: 'delivery__price delivery__text-dinamic',
              textContent: 'Бесплатно',
            }),
          ],
        }),
        createElement('div', {
          className: 'delivery__info-wrapper delivery__two-column',
        }, {
          appends: [
            createElement('p', {
              className: 'delivery__info-date delivery__text-dinamic',
              textContent: dateDelivery(),
            }),
            createElement('ul', {
              className: 'delivery__info-list',
            }, {
              appends: [...itemImg],
            }),
          ],
        }),
      ],
    }),
  });
  return delivery;
};
