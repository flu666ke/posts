import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { connect } from 'react-redux';
import List from './views/List';
import { getPostsThunkCreator } from './redux/reducer';

const LatestPosts = ({ thunkPosts, posts }) => {
  useEffect(() => {
    thunkPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="latest-posts">
      <List posts={posts} />
    </div>
  );
};

LatestPosts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  thunkPosts: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  posts: state.posts.posts,
});

const mapDispatchToProps = {
  thunkPosts: getPostsThunkCreator,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LatestPosts);
