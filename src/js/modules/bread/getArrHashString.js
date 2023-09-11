import {router} from '../../router.js';

export const getArrURL = () => {
  const currentLocation = router.getCurrentLocation();
  console.log('currentLocation: ', currentLocation);
  // return decodeURIComponent(currentLocation.url).split('/');
  return decodeURIComponent(currentLocation.hashString).split('/');
};
