import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app/App';

console.log('V1');

ReactDOM.render(
    <BrowserRouter basename="/tormenta">
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
