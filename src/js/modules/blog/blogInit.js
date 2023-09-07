import {API_URL_POST, main} from '../../helper/const.js';
import { getDataBlog } from '../serviceAPI.js';
import {renderBlog} from './renderBlog.js';

export const blogInit = async (currentLocation) => {
  main.textContent = '';
  const search = currentLocation?.queryString || '';

  const data = await getDataBlog(API_URL_POST, search);
  const blog = renderBlog(data);
  main?.append(blog);

  console.log('blogInit');
};
