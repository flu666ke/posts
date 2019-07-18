import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import List from './views/List';
import Form from './views/Form';
import Post from './views/Post';
import './style.scss';
import { getPostThunkCreator, addCommentThunkCreator } from './redux/reducer';

const ViewPost = ({
  title, body, comments, match, thunkPost, thunkComment,
}) => {
  const {
    params: { postId },
  } = match;
  useEffect(() => {
    thunkPost(postId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addCommentHandler = (e) => {
    e.preventDefault();
    const textBody = e.target.textBody.value;

    const data = {
      postId,
      body: textBody,
    };
    thunkComment(data);
  };

  return (
    <>
      <Post title={title} body={body} />
      <List comments={comments} />
      <Form addCommentHandler={addCommentHandler} />
    </>
  );
};

ViewPost.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.object.isRequired,
  thunkPost: PropTypes.func.isRequired,
  thunkComment: PropTypes.func.isRequired,
};

const mapStateToProps = ({
  post: {
    postId, title, body, comments,
  },
}) => ({
  postId,
  title,
  body,
  comments,
});

const mapDispatchToProps = {
  thunkPost: getPostThunkCreator,
  thunkComment: addCommentThunkCreator,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewPost);
