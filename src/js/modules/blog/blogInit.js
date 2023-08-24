import {API_URL_POST} from '../../helper/const.js';
import {getDataArticle} from '../serviceAPI.js';
import {renderBlog} from './renderBlog.js';

export const blogInit = async () => {
  const pageBlog = document.querySelector('.blog-page');
  const search = window.location.search;
  const data = await getDataArticle(API_URL_POST, search);

  const blog = renderBlog(data);
  pageBlog?.append(blog);
};
