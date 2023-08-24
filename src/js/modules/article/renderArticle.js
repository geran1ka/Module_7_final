import {createAside} from './createAside.js';
import {createArticle} from './createAticle.js';
import {createElement} from '../../helper/createElement.js';

export const renderArticle = async (data) => {
  const section = createElement('section', {
    className: 'section-article',
  });

  const container = createElement('div', {
    className: 'container section-article__container ',
  });

  const article = await createArticle(data);
  const aside = createAside();
  container.append(article, aside);
  section.append(container);

  return section;
};
