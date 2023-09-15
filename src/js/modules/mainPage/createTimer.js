import {createElement} from '../../helper/createElement.js';

export const createTimer = () => {
  const timer = createElement('div', {
    className: 'hero__timer timer timer_disabled',
  });
  timer.dataset.deadline = '2023/09/23 17:29';
  return timer;
};
