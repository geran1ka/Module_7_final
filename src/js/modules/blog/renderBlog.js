import {createElement} from '../../helper/createElement.js';
import {paginationController} from './paginationControl.js';
import {renderPagination} from './renderPagination.js';

export const renderBlog = (data) => {
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

  const itemList = data.data.map(item => {
    const li = createElement('li', {
      className: 'blog__item',
    }, {
      append: createElement('article', {
        className: 'blog-article',
      }, {
        appends: [
          createElement('img', {
            className: 'blog-article__img',
            src: item.image ? item.image : './img/blog/no-photo.jpg',
            alt: '#',
          }),
          createElement('div', {
            className: 'blog-article__content-wrapper',
          }, {
            appends: [
              createElement('h2', {
                className: 'blog-article__title',
              }, {
                append: createElement('a', {
                  className: 'blog-article__title-link',
                  href: `article.html?id=${item.id}`,
                  textContent: `${item.title}`,
                }),
              }),
              createElement('div', {
                className: 'blog-article__info',
              }, {
                appends: [
                  createElement('div', {
                    className: 'blog-item__date date',
                  }, {
                    append: createElement('p', {
                      textContent: '22 октября 2021, 12:45',
                    }),
                  }),
                  createElement('div', {
                    className: 'blog-article__count-wrapper',
                  }, {
                    appends: [
                      createElement('a', {
                        className: 'blog-article__views-link',
                        href: '#',
                        innerHTML: `
                          <svg class="blog-article__views-icon" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.257 11.462C21.731 12.082 21.731 12.919 21.257 13.538C19.764 15.487 16.182 19.5 12 19.5C7.81801 19.5 4.23601 15.487 2.74301 13.538C2.51239 13.2411 2.38721 12.8759 2.38721 12.5C2.38721 12.1241 2.51239 11.7589 2.74301 11.462C4.23601 9.513 7.81801 5.5 12 5.5C16.182 5.5 19.764 9.513 21.257 11.462V11.462Z" stroke="#8F8F8F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12 15.5C13.6569 15.5 15 14.1569 15 12.5C15 10.8431 13.6569 9.5 12 9.5C10.3431 9.5 9 10.8431 9 12.5C9 14.1569 10.3431 15.5 12 15.5Z" stroke="#8F8F8F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>                    
                          <span class="blog-article__views-count">1.2K</span>
                        `,
                      }),
                      createElement('a', {
                        className: 'blog-article__views-link',
                        href: '#',
                        innerHTML: `
                          <svg class="blog-article__views-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1502_178)">
                              <path d="M20 2H4C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM6 9H18V11H6V9ZM14 14H6V12H14V14ZM18 8H6V6H18V8Z" fill="#8F8F8F"/>
                            </g>
                          </svg>  
                          <span class="blog-article__comment-count">0</span>
                        `,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
    return li;
  });

  const {pagination, linkBack, linkNext, page, pages} = renderPagination(data);
  paginationController(pagination, linkBack, linkNext, page, pages);

  section.append(container);
  blogList.append(...itemList);
  blogContent.append(blogList);
  container.append(blogContent, pagination);
  // const urlPageBlog = window.location.href;

  return section;
};
