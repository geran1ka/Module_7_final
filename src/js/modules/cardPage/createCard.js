import {URL, cartCountItem} from '../../helper/const.js';
import {createElement} from '../../helper/createElement.js';
import {dateDelivery} from '../../helper/dateDelivery.js';
import {loanCalculation} from '../../helper/loanСalculation.js';
import {addCart, getCart, removeCart} from '../cart/cartController.js';
import {addFavorite, getFavorite, removeFavorite} from '../favoriteController.js';

export const createCard = (err, data) => {
  const getCheckItemCart = (id) => {
    const listCart = getCart();
    return listCart.some(item => item.id === id);
  };
  getCheckItemCart(data.id);

  if (err) {
    console.warn(err);
    return;
  }
  const card = createElement('section', {
    className: 'card',
  }, {
    append: createElement('div', {
      className: 'container card__container',
    }, {
      appends: [
        createElement('h2', {
          className: 'card__title',
          textContent: data.title,
        }),
        createElement('div', {
          className: 'card__img-wrapper',
          innerHTML: `
            <img 
              class="card__img" .
              src="${URL}/${data.image}" 
              alt="${data.title}" 
              width="757px" 
              height="427px"
            >
            ${data.discount ? `<p class="discount card__discount">${data.discount}%</p>` : ''}
          `,
        }),
        createElement('div', {
          className: 'card__book',
        }, {
          appends: [
            createElement('div', {
              className: 'card__price-wrapper',
            }, {
              appends: [
                createElement('p', {
                  className: 'card__price',
                }, {
                  appends: [
                    createElement('span', {
                      className: data.discount ? 'card__price-new' : 'card__price-new card__price-new_black',
                      textContent: data.discount ?
                        `${(data.price - (data.price * data.discount / 100))} ₽` :
                        `${data.price} ₽`,
                    }),
                    createElement('span', {
                      className: 'card__price-old',
                      textContent: data.discount ? `${data.price} ₽` : '',
                    }),
                  ],
                }),
                createElement('p', {
                  className: 'card__price-credit',
                  textContent: `В кредит от 
                    ${loanCalculation(data.discount ? data.price - (data.price * data.discount / 100) : data.price)} ₽`,
                }),
              ],
            }),
            createElement('div', {
              className: 'card__btn-wrapper',
            }, {
              appends: [
                createElement('button', {
                  className: getCheckItemCart(data.id) ? 'card__btn-cart card__btn-del' : 'card__btn-cart ',
                  type: 'button',
                  textContent: getCheckItemCart(data.id) ? 'Удалить из корзины' : 'Добавить в корзину',
                }, {
                  cb(elem) {
                    elem.addEventListener('click', () => {
                      if (elem.closest('.card__btn-del')) {
                        console.log('remove');
                        removeCart(data.id);
                        elem.classList.remove('card__btn-del');
                        elem.textContent = 'Добавить в корзину';
                      } else {
                        addCart(data);
                        elem.classList.add('card__btn-del');
                        console.log('add');
                        elem.textContent = 'Удалить из корзины';
                      }
                    });
                  },
                }),
                createElement('button', {
                  className: `card__btn-favorite 
                    ${getFavorite().find(item => item.id === data.id) ?
                      'card__btn-favorite_active' : ''}`,
                  ariaLabel: 'Добавить в избранное',
                  dataSetId: data.id,
                  innerHTML: `


                  <svg width="36" height="36" viewBox="0 0 36 36" stroke="currentColor" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_2423_41)">
                    <path d="M18 32.025L15.825 30.045C8.1 23.04 3 18.42 3 12.75C3 8.13 6.63 4.5 11.25 4.5C13.86 4.5 16.365 5.715 18 7.635C19.635 5.715 22.14 4.5 24.75 4.5C29.37 4.5 33 8.13 33 12.75C33 18.42 27.9 23.04 20.175 30.06L18 32.025Z"/>
                    </g>
                    <defs>
                  </svg>

                  `,
                }, {
                  cb(elem) {
                    elem.setAttribute('data-id', data.id);
                    elem.addEventListener('click', (e) => {
                      const target = e.target;

                      if (target.closest('.card__btn-favorite_active')) {
                        removeFavorite(data.id);
                        elem.classList.remove('card__btn-favorite_active');
                        return;
                      }

                      if (target.closest('.card__btn-favorite')) {
                        addFavorite(data);
                        elem.classList.add('card__btn-favorite_active');
                        return;
                      }
                      console.log('favorite');
                    });
                  },
                }),
              ],
            }),
            createElement('div', {
              className: 'card__wrapper-delivery-salesman',
            }, {
              appends: [
                createElement('p', {
                  className: 'card__delivery',
                  textContent: 'Доставка',
                }, {
                  append: createElement('span', {
                    className: 'card__delivery-date',
                    textContent: dateDelivery(),
                  }),
                }),
                createElement('p', {
                  className: 'card__salesman',
                  textContent: 'Продавец',
                }, {
                  append: createElement('span', {
                    className: 'card__salesman-name',
                    textContent: 'ShopOnline',
                  }),
                }),
              ],
            }),
            createElement('div', {
              className: 'card__discount-btn',
              innerHTML: `
              <svg class="card__discount-svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 13.586V10C19 6.783 16.815 4.073 13.855 3.258C13.562 2.52 12.846 2 12 2C11.154 2 10.438 2.52 10.145 3.258C7.185 4.074 5 6.783 5 10V13.586L3.293 15.293C3.19996 15.3857 3.12617 15.4959 3.07589 15.6172C3.0256 15.7386 2.99981 15.8687 3 16V18C3 18.2652 3.10536 18.5196 3.29289 18.7071C3.48043 18.8946 3.73478 19 4 19H20C20.2652 19 20.5196 18.8946 20.7071 18.7071C20.8946 18.5196 21 18.2652 21 18V16C21.0002 15.8687 20.9744 15.7386 20.9241 15.6172C20.8738 15.4959 20.8 15.3857 20.707 15.293L19 13.586ZM19 17H5V16.414L6.707 14.707C6.80004 14.6143 6.87383 14.5041 6.92412 14.3828C6.9744 14.2614 7.00019 14.1313 7 14V10C7 7.243 9.243 5 12 5C14.757 5 17 7.243 17 10V14C17 14.266 17.105 14.52 17.293 14.707L19 16.414V17ZM12 22C12.6193 22.0008 13.2235 21.8086 13.7285 21.4502C14.2335 21.0917 14.6143 20.5849 14.818 20H9.182C9.38566 20.5849 9.76648 21.0917 10.2715 21.4502C10.7765 21.8086 11.3807 22.0008 12 22Z"/>
              </svg>
              <span>Узнать о снижении цены</span>
              `,
            }),
          ],
        }),
        createElement('div', {
          className: 'card__description',
        }, {
          appends: [
            createElement('h3', {
              className: 'card__description-title',
              textContent: 'Описание:',
            }),
            createElement('p', {
              className: 'card__description-text',
              textContent: data.description,
            }),
          ],
        }),
      ],
    }),
  });
  return card;
};

