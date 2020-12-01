import React from 'react';

import './Button.css';

const Button = ({ children, click, width }) => (
    <button
      className={`tormenta-btn tormenta-btn-${width}`}
      onClick={() => click('nice')}
      type="button"
    >
        {children}
    </button>
);

export default Button;
