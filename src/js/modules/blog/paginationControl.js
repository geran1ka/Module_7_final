import {getDataArticle, getDataBlog} from '../serviceAPI.js';
import {renderBlog} from './renderBlog.js';

export const paginationController = async (pagination, linkBack, linkNext, page, pages) => {
  const url = window.location;

  linkBack.addEventListener('click', async e => {
    e.preventDefault();
    if (page > 1) {
      page--;
    }
  });
  linkNext.addEventListener('click', async e => {
    e.preventDefault();
    if (page + 1 <= pages) {
      page++;
    }
  });

  pagination.addEventListener('click', async e => {
    e.preventDefault();
    if (e.target.closest('.blog-pagination__link')) {
      await getDataBlog(renderBlog, `?page=${page}`);
      url.hash = `#blog?page=${page}`;
    }

    if (e.target.closest('.blog-pagination__item')) {
      await getDataArticle(renderBlog, `?page=${e.target.textContent}`);

      url.hash = `#blog?page=${e.target.textContent}`;
    }
  });

  if (page >= pages) {
    linkNext.classList.add('blog-pagination__link_disabled');
    linkNext.setAttribute('disabled', 'disabled');
  } else if (page <= 1) {
    linkBack.classList.add('blog-pagination__link_disabled');
    linkBack.setAttribute('disabled', 'disabled');
  } else {
    if (linkBack.classList.contains('.blog-pagination__link_disabled')) {
      linkBack.classList.remove('blog-pagination__link_disabled');
      linkBack.setAttribute('disabled', 'disabled');
    }
    if (linkNext.classList.contains('.blog-pagination__link_disabled')) {
      linkNext.classList.remove('blog-pagination__link_disabled');
      linkNext.removeAttribute('disabled');
    }
  }
  return page;
};


