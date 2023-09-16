import {deadlineTimer} from '../../helper/const.js';
import {createElement} from '../../helper/createElement.js';

export const createTimer = () => {
  const timer = createElement('div', {
    className: 'hero__timer timer timer_disabled',
  });
  timer.dataset.deadline = deadlineTimer;
  return timer;
};
