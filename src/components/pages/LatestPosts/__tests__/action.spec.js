import { posts } from '../mock';
import { setPosts, SET_POSTS } from '../redux/reducer';

describe('Latest posts action', () => {
  test('should set posts action', () => {
    expect(setPosts(posts[0])).toEqual({ type: SET_POSTS, posts: posts[0] });
  });
});
