import {createError} from '../../helper/createError.js';
import {overlayImgLoad} from '../../helper/overlayLoadImg.js';
import {createBlog} from './createBlog.js';
import {createBlogItem} from './createBlogItem.js';
import {paginationController} from './paginationControl.js';
import {renderPagination} from './renderPagination.js';

export const renderBlog = (err, data) => {
  if (err) {
    console.warn(err);
    return createError(err);
  }

  const preload = overlayImgLoad();
  const section = createBlog();
  const itemList = data.data.map(item => createBlogItem(item, preload));
  const pagination = renderPagination(data);
  section.blogList.append(...itemList);
  section.container.append(pagination);

  paginationController(pagination, pagination.linkBack, pagination.linkNext, pagination.page, pagination.pages);

  return section;
};
