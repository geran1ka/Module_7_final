import {timerControl} from './timerControl.js';

export const timerInit = (timer) => {
  if (timer) {
    const deadline = new Date(timer.dataset.deadline);
    if ((new Date(deadline).getTime() - Date.now()) > 0) {
      timer.classList.remove('timer_disabled');
      return timerControl(timer, deadline);
    }
  }
};
