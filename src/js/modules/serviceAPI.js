import {API_URL_USERS, URL} from '../helper/const.js';
import {fetchRequest} from '../helper/fetchRequest.js';


// export const getData = (callback) => fetchRequest(`${URL}/api/goods`, {
//   method: 'get',
//   callback,
// });


// export const getDataId = (callback, id) => fetchRequest(`${URL}/api/goods/${id}`, {
//   method: 'GET',
//   callback,
// }); // не выводится ошибка


// export const sendData = (body, callback) => fetchRequest(`${URL}/api/goods`, {
//   method: 'POST',
//   callback,
//   body,
// });


// export const updateData = (body, callback, id) => fetchRequest(`${URL}/api/goods/${id}`, {
//   method: 'PATCH',
//   callback,
//   body,
// });

// export const deleteData = (elem, renderGoods, id) => fetchRequest(`${URL}/api/goods/${id}`, {
//   method: 'DELETE',
//   callback: (err, data) => {
//     if (err) {
//       const errorElem = createError(err);
//       elem.append(errorElem);
//       return;
//     }
//     if (data) {
//       getData(renderGoods);
//     }
//   },
// });

export const getCategory = (callback) => fetchRequest(`${URL}/api/category`, {
  method: 'get',
  callback,
});

// export const getDataSearch = (callback, search) => fetchRequest(`${URL}/api/goods?search=${search}`, {
//   method: 'get',
//   callback,
// });

// export const fetchRequest = async (url, {
//   method = 'get',
//   callback,
//   body,
//   headers,
// }) => {
//   try {
//     const options = {
//       method,
//     };

//     if (body) options.body = JSON.stringify(body);
//     if (headers) options.headers = JSON.stringify(headers);

//     const response = await fetch(url, options);

//     if (response.ok) {
//       const data = await response.json();
//       if (callback) return callback(null, data);
//       return;
//     }
//     throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
//   } catch (err) {
//     return callback(err);
//   }
// };

export const getDataArticle = async (url, id = '') => {
  const result = await fetch(`${url}/${id}`);
  const data = await result.json();
  return data;
};

export const getAuthorArticle = async (url, id = '') => {
  const result = await fetch(`${url}/${id}`);
  const data = await result.json();
  return data;
};

