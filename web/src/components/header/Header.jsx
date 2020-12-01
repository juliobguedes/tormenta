import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = ({ headerSearch }) => {
    const [searchText, setSearchText] = useState('');
    const onUpdateText = (event) => {
        const text = event.target.value;
        headerSearch(text);
        setSearchText(text);
        console.log(text);
    }
    return (
        <header className="navbar">
            <div className="navbar-logo">LOGO</div>
            <div className="navbar-buttons">
                <Link className="navbar-btn" to="/">Lista de Talentos</Link>
                <Link className="navbar-btn" to="/added">Talentos Adicionados</Link>
            </div>
            <div className="navbar-search">
                { headerSearch ?
                    <input
                      className="navbar-search-text"
                      onChange={ev => onUpdateText(ev)}
                      placeholder="Busca por talentos"
                      type="text"
                      value={searchText}
                    /> : null
                }
            </div>
        </header>
    );
};

export default Header;
