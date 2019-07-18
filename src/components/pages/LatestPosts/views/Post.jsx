import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

const Post = ({ title, body, id }) => (
  <div className="post">
    <NavLink to={`post/${id}`}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </NavLink>
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Post;
