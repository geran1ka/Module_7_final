import {createElement} from './createElement.js';

export const createError = (err) => createElement('div', {
  className: 'overlay overlay_active',
}, {
  append: createElement('div', {
    className: 'error',
  }, {
    appends: [
      createElement('div', {
        className: 'error__wrapper',
      }, {
        appends: [
          createElement('div', {
            className: 'error__span-one error__span',
          }),
          createElement('div', {
            className: 'error__span-two error__span',
          }),
        ],
      }),
      createElement('h3', {
        className: 'error__title',
        textContent: `${err}`,
      }, {
        append: createElement('span', {
          textContent: ' Что-то пошло не так...',
        }),
      }),
      createElement('button', {
        className: 'error__close close',
        innerHTML: `
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2L22 22" stroke="#currentColor" stroke-width="3" stroke-linecap="round"/>
                <path d="M2 22L22 2" stroke="#currentColor" stroke-width="3" stroke-linecap="round"/>
              </svg> 
            `,
      }),
    ],

  }),
  cb(elem) {
    elem.addEventListener('click', (e) => {
      const target = e.target;
      if (elem === target || target.closest('.error__close')) {
        elem.remove();
        const timerId = setTimeout(() => {
          window.location.reload();
        }, 1000);
        clearTimeout(timerId);
      }
    });
  },
});
