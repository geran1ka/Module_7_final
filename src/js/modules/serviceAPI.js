import {URL} from '../helper/const.js';
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
