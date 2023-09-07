import {createElement} from '../../helper/createElement.js';
import {dateDelivery} from '../../helper/dateDelivery.js';
import {getTotalCountProduct} from '../../helper/getTotalCountProduct.js';
import {getTotalPrice} from '../../helper/getTotalPrice.js';

export const createInfo = (cartArray) => {
  const spanTotalPrice = createElement('span', {
    textContent: `${getTotalPrice(cartArray)} ₽`,
  });

  const info = createElement('div', {
    className: 'shop__info info shop__style-all',
  }, {
    append: createElement('div', {
      className: 'info__container',
    }, {
      appends: [
        createElement('h3', {
          className: 'info__product-all-price',
        }, {
          appends: [
            createElement('span', {
              textContent: 'Итого:',
            }),
            spanTotalPrice,
          ],
        }),
        createElement('div', {
          className: 'info__content',
        }, {
          appends: [
            createElement('div', {
              className: 'info__product',
            }, {
              appends: [
                createElement('div', {
                  className: 'info__product-count',
                }, {
                  appends: [
                    createElement('p', {
                      className: 'info__text',
                      textContent: `Товары, ${getTotalCountProduct(cartArray)} шт.`,
                    }),
                    createElement('p', {
                      className: 'info__text',
                      textContent: `${getTotalPrice(cartArray, false)}  ₽`, // измменить подстчет
                    }),
                  ],
                }),
                createElement('div', {
                  className: 'info__product-discount',
                }, {
                  appends: [
                    createElement('p', {
                      className: 'info__text',
                      textContent: 'Скидка',
                    }),
                    createElement('p', {
                      className: 'info__text',
                      textContent: `${getTotalPrice(cartArray) - getTotalPrice(cartArray, false)}  ₽`, // изменить
                    }),
                  ],
                }),
                createElement('div', {
                  className: 'info__product-delivery',
                }, {
                  appends: [
                    createElement('p', {
                      className: 'info__text',
                      textContent: 'Доставка',
                    }),
                    createElement('p', {
                      className: 'info__text',
                      textContent: 'Бесплатно',
                    }),
                  ],
                }),
              ],
            }),
            createElement('div', {
              className: 'info__delivery-wrapper',
            }, {
              appends: [
                createElement('h4', {
                  className: 'info__delivery-subtitle info__subtitle',
                  textContent: 'Доставка: ',
                }, {
                  append: createElement('a', {
                    className: 'info__link info__link_point',
                    href: '#',
                    textContent: 'Пункт выдачи: ',
                  }),
                }),
                createElement('input', {
                  className: 'visually-hidden info__form',
                  name: 'info__point',
                }),
                createElement('div', {
                  className: 'info__delivery',
                }, {
                  appends: [
                    createElement('p', {
                      className: 'info__text',
                      textContent: 'Ежедневно 10:00 - 21:00',
                    }),
                    createElement('p', {
                      className: 'info__text',
                      textContent: 'г. Москва (Московская область), улица Павлика Морозова, д. 48',
                    }),
                  ],
                },
                ),
              ],
            }),
            createElement('div', {
              className: 'info__date-wrapper',
            }, {
              appends: [
                createElement('h4', {
                  className: 'info__delivery-subtitle info__subtitle',
                  textContent: 'Дата: ',
                }, {
                  append: createElement('a', {
                    className: 'info__link info__link_point',
                    href: '#',
                    textContent: dateDelivery(),
                  }),
                }),
                createElement('input', {
                  className: 'info__form visually-hidden',
                  name: 'info__date',
                  type: 'hidden',
                }),
              ],
            }),
            createElement('div', {
              className: 'info__pay-wrapper',
            }, {
              appends: [
                createElement('h4', {
                  className: 'info__delivery-subtitle info__subtitle',
                  textContent: 'Оплата: ',
                }, {
                  append: createElement('a', {
                    className: 'info__link info__link_point',
                    href: '#',
                    textContent: 'Картой',
                  }),
                }),
                createElement('input', {
                  className: 'info__form visually-hidden',
                  name: 'info__pay',
                  type: 'hidden',
                }),
              ],
            }),
          ],
        }),
        createElement('form', {
          className: 'info__form',
          name: 'info__form',
          id: 'info__form',
        }, {
          append: createElement('button', {
            className: 'info__form-btn',
            type: 'submit',
            textContent: 'Заказать',
          }),
        }),
        createElement('div', {
          className: 'info__offer-wrapper',
        }, {
          appends: [
            createElement('input', {
              className: 'info__offer-checkbox cart__checkbox',
              name: 'offer',
              type: 'checkbox',
              id: 'offer',
              // form: 'info__form',
            }),
            createElement('label', {
              className: 'info__offer-text',
              for: 'offer',
              innerHTML: `
              <p>Согласен с условиями <span>правил пользования торговой площадкой и правилами возврата</span></p>
              `,
            }),
          ],
        }),
      ],
    }),
  });
  return info;
};
