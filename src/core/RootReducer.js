import { combineReducers } from 'redux';

import posts from '../components/pages/LatestPosts/redux/reducer';
import post from '../components/pages/ViewPost/redux/reducer';

export default combineReducers({
  posts,
  post,
});
