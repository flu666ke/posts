import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ body }) => {
  const text = JSON.parse(body).body;
  return (
    <p className="post-comment">{text}</p>
  );
};
Comment.propTypes = {
  body: PropTypes.string.isRequired,
};

export default Comment;
