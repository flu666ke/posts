import postsAPI from '../../../utils/service';

export const SET_POSTS = 'SET_POSTS';
export const initialState = {
  posts: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_POSTS: {
      return {
        ...state,
        posts: action.posts,
      };
    }
    default:
      return state;
  }
}

export const setPosts = posts => ({ type: SET_POSTS, posts });

export const getPostsThunkCreator = () => (dispatch) => {
  postsAPI.getPosts().then((dataPosts) => {
    dispatch(setPosts(dataPosts));
  });
};
