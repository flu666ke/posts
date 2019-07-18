import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

const List = ({ comments }) => (
  <div className="list-comments">
    <h2>COMMENTS:</h2>
    {comments.map(comment => (
      <Comment key={comment.id} body={comment.body} />
    ))}
  </div>
);

List.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default List;
