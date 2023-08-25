import {URL} from '../../helper/const.js';
import {createElement} from '../../helper/createElement.js';

export const createCard = (err, data) => {
  if (err) {
    console.warn(err);
    return;
  }
  const card = createElement('section', {
    className: 'card-item',
  }, {
    append: createElement('div', {
      className: 'container card-item__container',
    }, {
      appends: [
        createElement('h2', {
          className: 'card-item__title',
          textContent: data.title,
        }),
        createElement('div', {
          className: 'card-item__img-wrapper',
          innerHTML: `
            <img 
              class="card-item__img" .
              src="${URL}/${data.image}" 
              alt="${data.title}" 
              width="757px" 
              height="427px"
            >
            ${data.discount ? `<p class="discount card-item__discount">${data.discount}%</p>` : ''}
          `,
        }),
        createElement('div', {
          className: 'card-item__book',
        }, {
          appends: [
            createElement('div', {
              className: 'card-item__price-wrapper',
            }, {
              appends: [
                createElement('p', {
                  className: 'card-item__price',
                }, {
                  appends: [
                    createElement('span', {
                      className: 'card-item__price-new',
                      textContent: data.discount ?
                        `${(data.price - (data.price * data.discount / 100))} ₽` :
                        `${data.price} ₽`,
                    }),
                    createElement('span', {
                      className: 'card-item__price-old',
                      textContent: data.discount ? `${data.price} ₽` : '',
                    }),
                  ],
                }),
                createElement('p', {
                  className: 'card-item__price-credit',
                  textContent: 'В кредит от 5600 ₽',
                }),
              ],
            }),
            createElement('div', {
              className: 'card-item__btn-wrapper',
            }, {
              appends: [
                createElement('button', {
                  className: 'card-item__btn-cart',
                  type: 'button',
                  textContent: 'Добавить в корзину',
                }),
                createElement('button', {
                  className: 'card-item__btn-favorite',
                  ariaLabel: 'Добавить в избранное',
                  innerHTML: `
                  <svg class="card-item__svg-favorite" width="33" height="33" viewBox="0 0 33 33" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_901_1437)">
                    <path d="M22.6875 4.125C20.295 4.125 17.9987 5.23875 16.5 6.99875C15.0012 5.23875 12.705 4.125 10.3125 4.125C6.0775 4.125 2.75 7.4525 2.75 11.6875C2.75 16.885 7.425 21.12 14.5062 27.555L16.5 29.3563L18.4937 27.5413C25.575 21.12 30.25 16.885 30.25 11.6875C30.25 7.4525 26.9225 4.125 22.6875 4.125ZM16.6375 25.5062L16.5 25.6437L16.3625 25.5062C9.8175 19.58 5.5 15.6613 5.5 11.6875C5.5 8.9375 7.5625 6.875 10.3125 6.875C12.43 6.875 14.4925 8.23625 15.2212 10.12H17.7925C18.5075 8.23625 20.57 6.875 22.6875 6.875C25.4375 6.875 27.5 8.9375 27.5 11.6875C27.5 15.6613 23.1825 19.58 16.6375 25.5062Z"/>
                    </g>
                  </svg>
                  `,
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
                    textContent: '1-3 января',
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

