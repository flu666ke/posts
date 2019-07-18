import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

const List = ({ posts }) => (
  <div className="list">
    {posts.map(post => (
      <Post key={post.id} id={post.id} title={post.title} body={post.body} />
    ))}
  </div>
);

List.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default List;
