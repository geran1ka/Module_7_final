import {main} from './const.js';

export const addMainContent = (content, prepend = false) => {
  main.textContent = '';
  return prepend ? main.prepend(content) : main.append(content);
};
