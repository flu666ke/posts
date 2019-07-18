import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ addCommentHandler }) => (
  <div className="comment">
    <form onSubmit={addCommentHandler}>
      <textarea name="textBody" placeholder="add comment" />
      <p>
        <input type="submit" value="Add comments" />
      </p>
    </form>
  </div>
);

Form.propTypes = {
  addCommentHandler: PropTypes.func.isRequired,
};

export default Form;
