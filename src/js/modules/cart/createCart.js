import {createElement} from '../../helper/createElement.js';
import {removeCart} from './cartController.js';
import {cartInit} from './cartInit.js';
import {itemCart} from './itemCart.js';

export const createCart = (cartArray) => {
  const cart = createElement('div', {
    className: 'shop__cart cart shop__style-all',
  });

  const itemCartArray = itemCart(cartArray);
  const checkboxAll = createElement('input', {
    className: 'cart__checkbox cart__checkbox-chose-all',
    type: 'checkbox',
    name: 'сhooseAll',
  }, {
    cb(elem) {
      elem.addEventListener('click', () => {
        if (elem.checked) {
          itemCartArray.forEach(element => {
            element.querySelector('.item-cart__checkbox').setAttribute('checked', 'checked');
            console.log('chek');
          });
        } else {
          itemCartArray.forEach(element => {
            element.querySelector('.item-cart__checkbox').removeAttribute('checked', 'checked');
            console.log('remove');
          });
        }
      });
    },
  });

  const btnDel = createElement('button', {
    className: 'cart__btn-del',
    innerHTML: `
            <svg class="cart__icon-delete" width="30" height="30" viewBox="0 0 30 30" fill="currentColor" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_217_1895)">
              <path d="M19.0214 5.35355L19.1679 5.5H19.375H23.25V7H6.75V5.5H10.625H10.8321L10.9786 5.35355L12.0821 4.25H17.9179L19.0214 5.35355ZM10 25.75C8.90114 25.75 8 24.8489 8 23.75V9.25H22V23.75C22 24.8489 21.0989 25.75 20 25.75H10Z"/>
              </g>
            </svg>
          `,
  }, {
    cb(elem) {
      elem.addEventListener('click', () => {
        itemCartArray.forEach((element, index) => {
          if (element.querySelector('.item-cart__checkbox').checked) {
            removeCart(cartArray[index].id);
            cartInit();
          }
        });
      });
    },
  });

  createElement('div', {
    className: 'cart__container',
  }, {
    parent: cart,
    appends: [
      createElement('div', {
        className: 'cart__title-wrapper',
      }, {
        appends: [
          createElement('h2', {
            className: 'cart__title title-2',
            textContent: 'Корзина',
          }),
          createElement('p', {
            className: 'cart__title-count',
            textContent: cartArray.length,
          }),
        ],
      }),
      createElement('div', {
        className: 'cart__content-wrapper',
      }, {
        appends: [
          createElement('div', {
            className: 'cart__content-top cart__row-line',
          }, {
            appends: [
              createElement('label', {
                className: 'cart__label',
                forHTML: 'сhooseAll',
                textContent: 'Выбрать все',
              }, {
                append: checkboxAll,
              }),
              btnDel,
            ],
          }),
          createElement('div', {
            className: 'cart__content-down',
          }, {
            append: createElement('ul', {
              className: 'cart__list cart__row-line',
            }, {
              appends: [...itemCartArray],
            }),
          }),
        ],
      }),
    ],
  });
  return cart;
};
