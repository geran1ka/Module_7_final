import {API_URL_POST, API_URL_USERS, URL} from '../helper/const.js';
import {fetchRequest} from '../helper/fetchRequest.js';

export const getCategory = (callback) => fetchRequest(`${URL}/api/category`, {
  method: 'get',
  callback,
});

export const getGoodsCategory = (callback, category) => fetchRequest(`${URL}/api/goods/category/${category}`, {
  method: 'get',
  callback,
});

export const getGoodsId = (callback, id) => fetchRequest(`${URL}/api/goods/${id}`, {
  method: 'get',
  callback,
});

export const getGoodsDiscount = (callback) => fetchRequest(`${URL}/api/goods/discount?4`, {
  method: 'get',
  callback,
});


export const getDataSearch = (callback, search = '') => fetchRequest(`${URL}/api/goods?search=${search}`, {
  method: 'get',
  callback,
});

export const getDataBlog = (callback, search = '') => fetchRequest(`${API_URL_POST}?${search}}`, {
  method: 'get',
  callback,
});

export const getDataArticle = (callback, id = '') => fetchRequest(`${API_URL_POST}/${id}}`, {
  method: 'get',
  callback,
});

export const getAuthorArticle = (callback, id = '') => fetchRequest(`${API_URL_USERS}/${id}}`, {
  method: 'get',
  callback,
});


