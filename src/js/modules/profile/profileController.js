import {main} from '../../helper/const.js';
import {createElement} from '../../helper/createElement.js';
import { router } from '../../router.js';

export const profileController = () => {
  const currentLocation = router.getCurrentLocation();
  console.log('currentLocation: ', currentLocation);
  main.textContent = '';
  return createElement('section', {
    className: 'shop',
  }, {
    parent: main,
    append: createElement('div', {
      className: 'container',
    }, {
      append: createElement('h2', {
        className: 'goods__title title-2',
        textContent: 'Данная страница находится в разработке',
      }),
    }),
  });
};
