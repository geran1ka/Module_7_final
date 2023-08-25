import {API_URL_POST, main} from '../../helper/const.js';
import {getDataArticle} from '../serviceAPI.js';
import {renderBlog} from './renderBlog.js';

export const blogInit = async () => {
  // const pageBlog = document.querySelector('.blog-page');
  main.textContent = '';
  const search = window.location.search;
  const data = await getDataArticle(API_URL_POST, search);

  const blog = renderBlog(data);
  main?.append(blog);
};
