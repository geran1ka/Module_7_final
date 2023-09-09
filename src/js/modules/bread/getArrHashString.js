import {router} from '../../router.js';

export const getArrHashString = () => {
  const currentLocation = router.getCurrentLocation();
  return decodeURIComponent(currentLocation.hashString).split('/');
};
