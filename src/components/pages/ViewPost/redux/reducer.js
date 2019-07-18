import postsAPI from '../../../utils/service';

export const SET_POST = 'SET_POST';
export const ADD_COMMENT = 'ADD_COMMENT';

const initialState = {
  postId: 0,
  body: '',
  title: '',
  comments: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_POST: {
      return {
        ...state,
        ...action.post,
      };
    }
    case ADD_COMMENT: {
      return {
        ...state,
        comments: [...state.comments, action.comment],
      };
    }
    default:
      return state;
  }
}

export const setPost = post => ({ type: SET_POST, post });
export const addComment = comment => ({ type: ADD_COMMENT, comment });

export const getPostThunkCreator = postId => (dispatch) => {
  postsAPI.getPost(postId).then((post) => {
    dispatch(setPost(post));
  });
};

export const addCommentThunkCreator = data => (dispatch) => {
  postsAPI.createComment(data).then((comment) => {
    dispatch(addComment(comment));
  });
};
