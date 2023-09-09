const URL = 'https://dazzling-rain-account.glitch.me';
// const URL = 'http://localhost:3000';
const API_URL_POST = 'https://gorest.co.in/public-api/posts';
const API_URL_USER = 'https://gorest.co.in/public-api/user';
const API_URL_USERS = 'https://gorest.co.in/public-api/users';


const catalogListHeader = document.querySelector('.header__catalog-list');
const catalogListFooter = document.querySelector('.footer__catalog-list');

const main = document.querySelector('.main');
const menuHeader = document.querySelector('.header__menu');
const menuBtnHeader = document.querySelector('.header__btn-menu');
const iconMenuBtnHeader = document.querySelector('.icon');
const cartCountItem = document.querySelector('.nav-list__svg_count');
const searchForm = document.querySelector('.header__form');
const search = searchForm.search;
const headerBread = document.querySelector('.header__bread');
console.log('headerBread: ', headerBread);

export {
  URL,
  API_URL_POST,
  API_URL_USER,
  API_URL_USERS,
  catalogListHeader,
  catalogListFooter,
  main,
  menuHeader,
  menuBtnHeader,
  iconMenuBtnHeader,
  cartCountItem,
  searchForm,
  search,
  headerBread,
};
