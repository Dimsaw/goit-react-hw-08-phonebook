import React from 'react';
import PropTypes from 'prop-types';

import s from './Filter.module.css';

const Filter = ({ filter, handleChange }) => {
  return (
    <>
      <label className={s.label}>
        <span className={s.text}>Find contacts by name</span>
        <input
          className={s.input}
          type="text"
          name="filter"
          value={filter}
          onChange={e => handleChange(e.target.value.trim())}
          required
        />
      </label>
    </>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
