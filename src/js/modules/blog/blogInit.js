import {main} from '../../helper/const.js';
import {getDataBlog} from '../serviceAPI.js';
import {renderBlog} from './renderBlog.js';

export const blogInit = async (currentLocation) => {
  main.textContent = '';
  const search = currentLocation?.queryString || '';

  const blog = await getDataBlog(renderBlog, search);
  main?.append(blog);
};
