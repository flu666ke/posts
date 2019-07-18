import Reducer, { initialState, setPosts } from '../redux/reducer';
import { posts } from '../mock';

describe('Latest posts reducer', () => {
  test('should initial state', () => {
    expect(Reducer(undefined, {})).toEqual({
      posts: [],
    });
  });

  test('should set posts action', () => {
    expect(Reducer(initialState, setPosts(posts))).toEqual({
      ...initialState,
      posts,
    });
  });
});
