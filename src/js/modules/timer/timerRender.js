import {createElement} from '../../helper/createElement.js';

export const timerRender = (timer) => {
  const timerTitle = createElement('p', {
    classList: 'timer__title',
    textContent: 'До конца акции:',
  });

  const timerItemDays = createElement('p', {
    classList: 'timer__item timer__item-days',
  });

  const timerCountDays = createElement('span', {
    classList: 'timer__count timer__count-days',
  });
  const timerUnitsDays = createElement('span', {
    classList: 'timer__units timer__units-days',
  });
  timerItemDays.append(timerCountDays, timerUnitsDays);

  const timerItemHours = createElement('p', {
    classList: 'timer__item timer__item-hours',
  });

  const timerCountHours = createElement('span', {
    classList: 'timer__count timer__count-hours',
  });
  const timerUnitsHours = createElement('span', {
    classList: 'timer__units timer__units-hours',
  });
  timerItemHours.append(timerCountHours, timerUnitsHours);

  const timerItemMinutes = createElement('p', {
    classList: 'timer__item timer__item-minutes',
  });

  const timerCountMinutes = createElement('span', {
    classList: 'timer__count timer__count-minutes',
  });
  const timerUnitsMinutes = createElement('span', {
    classList: 'timer__units timer__units-minutes',
  });
  timerItemMinutes.append(timerCountMinutes, timerUnitsMinutes);

  timer.append(timerTitle, timerItemDays, timerItemHours, timerItemMinutes);

  return {
    timerCountDays,
    timerUnitsDays,
    timerCountHours,
    timerUnitsHours,
    timerCountMinutes,
    timerUnitsMinutes,
  };
};
