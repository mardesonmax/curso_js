import React from 'react';

import PropTypes from 'prop-types';

import './Form.css';

import { FaPlus } from 'react-icons/fa';

const Form = (props) => {
  const { handleSubmit, handleChange, novaTarefa } = props;

  return (
    <form action="#" className="form" onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={novaTarefa} />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
};

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
};

export default Form;
