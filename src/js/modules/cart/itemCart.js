import {URL, cartCountItem} from '../../helper/const.js';
import {createElement} from '../../helper/createElement.js';
import {getTotalCountProduct} from '../../helper/getTotalCountProduct.js';
import {loanCalculation} from '../../helper/loanСalculation.js';
import {cartController, getCart, removeCart} from './cartController.js';

export const itemCart = (cartArray) => cartArray.map(item => {
  const checkDelItem = createElement('input', {
    className: 'item-cart__checkbox cart__checkbox',
    type: 'checkbox',
    name: 'product',
  });
  const btnDelItem = createElement('button', {
    className: 'cart__btn-del item-cart__btn-del',
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
        if (checkDelItem.checked) {
          removeCart(item.id);
          cartController();
        }
      });
    },
  });

  const countItemCart = createElement('span', {
    className: 'item-cart__count',
    textContent: item.count,
  });

  const getPrice = (item, discount = true) =>
    (item.discount ? (item.price - item.price * item.discount * discount / 100) * item.count : item.price * item.count);

  const price = createElement('p', {
    className: 'item-cart__price',
    textContent: `${getPrice(item)} ₽`,
  });
  const priceOld = createElement('p', {
    className: 'item-cart__old-price',
    textContent: item.discount ? `${getPrice(item, false)} ₽` : '',
  });

  const priceCredit = createElement('p', {
    className: 'item-cart__credit-price',
    textContent: `В кредит от ${loanCalculation(getPrice(item))} ₽`,
  });

  let count = +countItemCart.textContent;

  const btnMinusCount = createElement('button', {
    className: 'item-cart__btn-count item-cart__btn-count_minus',
    type: 'button',
    textContent: '-',
  }, {
    cb(elem) {
      elem.addEventListener('click', () => {
        count <= 1 ? count = 1 : count--;
        countItemCart.textContent = count;
        item.count = count;
        price.textContent = `${getPrice(item)} ₽`;
        priceOld.textContent = item.discount ? `${getPrice(item, false)} ₽` : '';
        priceCredit.textContent = `В кредит от ${loanCalculation(getPrice(item))} ₽`;
        const newCart = getCart().map(elem => {
          elem.id === item.id ? elem.count = count : '';
          return elem;
        });
        localStorage.setItem('cart', JSON.stringify(newCart));
        count < 1 ? '' : cartController();
        cartCountItem.textContent = getTotalCountProduct(getCart());
      });
    },
  });

  const btnPlusCount = createElement('button', {
    className: 'item-cart__btn-count item-cart__btn-count_plus',
    type: 'button',
    textContent: '+',
  }, {
    cb(elem) {
      elem.addEventListener('click', () => {
        count++;
        countItemCart.textContent = count;
        item.count = count;
        price.textContent = `${getPrice(item)} ₽`;
        priceOld.textContent = item.discount ? `${getPrice(item, false)} ₽` : '';
        priceCredit.textContent = `В кредит от ${loanCalculation(getPrice(item))} ₽`;
        const newCart = getCart().map(elem => {
          elem.id === item.id ? elem.count = count : '';
          return elem;
        });
        localStorage.setItem('cart', JSON.stringify(newCart));
        cartController();
        cartCountItem.textContent = getTotalCountProduct(getCart());
      });
    },
  });


  const li = createElement('li', {
    className: 'cart__item item-cart',
    id: item.id,
  }, {
    appends: [
      checkDelItem,
      createElement('img', {
        className: 'item-cart__img',
        src: `${URL}/${item.image}`,
        alt: item.title,
      }),
      createElement('div', {
        className: 'item-cart__info-product',
      }, {
        appends: [
          createElement('div', {
            className: 'item-cart__info-wrapper',
          }, {
            appends: [
              createElement('h3', {
                className: 'item-cart__title',
              }, {
                append: createElement('a', {
                  href: `#catalog/${item.category}/${item.id}`,
                  textContent: item.title,
                }),
              }),
              createElement('div', {
                className: 'item-cart__description',
                innerHTML: `
                      <p>Цвет: <span>черный</span></p>
                      <p>Оперативная память: <span>16 ГБ</span></p>
                    `,
              }),
            ],
          }),
          createElement('div', {
            className: 'item-cart__count-wrapper',
          }, {
            appends: [
              btnMinusCount,
              countItemCart,
              btnPlusCount,
              createElement('input', {
                className: 'visually-hidden',
                type: 'hidden',
                formHTML: 'info__form',
              }),
            ],
          }),

          createElement('div', {
            className: 'item-cart__price-wrapper',
          }, {
            appends: [
              price,
              priceOld,
              priceCredit,
            ],
          }),
          btnDelItem,
        ],
      }),
    ],
  });
  return li;
});
