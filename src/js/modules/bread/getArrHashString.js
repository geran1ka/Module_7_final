import {router} from '../../router.js';

export const getArrURL = () => {
  const currentLocation = router.getCurrentLocation();
  return decodeURIComponent(currentLocation.url).split('/');
};
