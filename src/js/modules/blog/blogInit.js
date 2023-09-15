import {main} from '../../helper/const.js';
import {getDataBlog} from '../serviceAPI.js';
import {renderBlog} from './renderBlog.js';

export const blogInit = async (currentLocation) => {
  // const currentLocation = router.getCurrentLocation();
  main.textContent = '';
  const search = currentLocation?.queryString || '';
  console.log('search: ', search);

  const blog = await getDataBlog(renderBlog, search);
  main?.append(blog);
};
