import {addMainContent} from '../../helper/addMainContent.js';
import {getDataBlog} from '../serviceAPI.js';
import {renderBlog} from './renderBlog.js';

export const blogInit = async (currentLocation) => {
  // const currentLocation = router.getCurrentLocation();
  const search = currentLocation?.queryString || '';
  addMainContent(await getDataBlog(renderBlog, search));
};
