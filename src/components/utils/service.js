import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://simple-blog-api.crew.red/',
  headers: {
    'Content-Type': 'application/json',
  },
});

const postsAPI = {
  getPost(postId) {
    return instance.get(`posts/${postId}`).then(response => response.data);
  },
  createComment(comment) {
    return instance
      .post('comments', {
        body: JSON.stringify(comment),
      })
      .then(response => response.data);
  },
  getPosts() {
    return instance.get('posts').then(response => response.data);
  },
};

export default postsAPI;
