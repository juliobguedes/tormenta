import React from 'react'
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './components/app/App';

console.log('V1', process.env);

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>,
    document.getElementById('root')
);
