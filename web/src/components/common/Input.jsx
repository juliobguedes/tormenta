import React from 'react';

import './Input.css';

const Input = ({ placeholder, update, value, width }) => {
    const updateInput = (ev) => {
        const text = ev.target.value;
        update(text);
    };

    return (
        <input
          className={`tormenta-input tormenta-input-${width}`}
          onChange={(ev) => updateInput(ev)}
          placeholder={placeholder}
          type="text"
          value={value || ''}
        />
    );
};

export default Input;
