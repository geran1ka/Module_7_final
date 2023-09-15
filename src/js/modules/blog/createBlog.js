import {createElement} from '../../helper/createElement.js';

export const createBlog = () => {
  const section = createElement('section', {
    className: 'blog',
  });

  const container = createElement('div', {
    className: 'container blog__container',
  });

  const blogContent = createElement('div', {
    className: 'blog__content',
  }, {
    append: createElement('h2', {
      className: 'blog__title visually-hidden',
      textContent: 'Блог',
    }),
  });

  const blogList = createElement('ul', {
    className: 'blog__list',
  });

  section.append(container);
  blogContent.append(blogList);
  container.append(blogContent);
  section.container = container;
  section.blogList = blogList;


  return section;
};
