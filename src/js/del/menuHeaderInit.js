import {iconMenuBtnHeader, menuBtnHeader, menuHeader} from '../helper/const.js';
import { scrollController } from '../helper/scrollControl.js';

// export const menuHeaderInit = () => {
//   document.body.addEventListener('click', e => {
//     // e.preventDefault();
//     console.log('e.target: ', e.target);
//     if (e.target.closest('.header__btn-menu')) {
//       // e.stopPropagation();

//       menuHeader.classList.toggle('header__menu_active');
//       menuBtnHeader.classList.toggle('header__btn-menu_active');
//       iconMenuBtnHeader.classList.toggle('icon_active');
//       console.log('Закрыть');
//     }
//   });
// };


// const menu = $('.header__menu');
// const menuBtn = $('.header__btn-menu');
// const icon = $('.icon');

// const openMenuA = () => {
//   icon.addClass('icon_active');
//   menuBtn.addClass('header__btn-menu_active');
//   menu.slideDown();
//   menu.css({display: 'grid'});
//   scrollController.disabledScroll();
// };

// const closeMenuA = () => {
//   icon.removeClass('icon_active');
//   menuBtn.removeClass('header__btn-menu_active');
//   menu.slideUp();

//   scrollController.enabledScroll();
// };

// export const menuControll = () => {
//   // menuBtn[0].addEventListener('click', () => {
//   //   icon.toggleClass('icon_active');
//   //   menu.slideToggle();
//   //   menu.css({display: 'grid'});
//   // });

//   $('body').on('click', (e) => {
//     if (e.target === menuBtn[0]) {
//       if (e.target.closest('.header__btn-menu_active')) {
//           closeMenuA();
//       } else {
//         openMenuA();
//       }
//     } else if (
//       e.target.closest('.menu__info-link') ||
//       e.target.closest('.menu__info-link') ||
//       e.target.closest('.menu__contacts-link')
//     ) {
//       console.log('end');
//       closeMenuA();
//     }
//   });
// };