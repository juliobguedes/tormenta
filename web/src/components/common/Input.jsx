import React from 'react';

import './Input.css';

const Input = ({ placeholder, update, value, width }) => (
    <input
      className={`tormenta-input tormenta-input-${width}`}
      onChange={(ev) => update(ev)}
      placeholder={placeholder}
      type="text"
      value={value}
    />
);

export default Input;
