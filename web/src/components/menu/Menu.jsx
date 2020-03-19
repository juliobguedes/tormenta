import React, { useState } from 'react';
import MenuCard from './menuCard/MenuCard';

import './Menu.css';

const featTypes = [
    'Combate', 'Destino', 'Magia', 'Perícia',
    'Poder Concedido', 'Tormenta', 'Racial',
];

const Menu = ({ selectType }) => (
    <div className="menu-container">
        <div className="inner-menu">
            {featTypes.map(featName =>
                <MenuCard menuName={featName} onClick={console.log} />
            )}
        </div>
    </div>
);

export default Menu;
