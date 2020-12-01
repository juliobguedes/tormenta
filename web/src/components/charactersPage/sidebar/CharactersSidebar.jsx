import React, { useState } from 'react';
import Sidebar from '../../sidebar/Sidebar';
import { Button, Input } from '../../common';

import './CharactersSidebar.css';

const Char = ({ char }) => (
    <div className="sidebar-char">
        <p>{char.nome}</p>
        <p>{char.hash}</p>
    </div>
);

const CharactersSidebar = ({ characters, load }) => {
    const [hash, setHash] = useState('');
    const updateText = (ev) => { setHash(ev.target.value); };
    return (
        <Sidebar sidebarVisible={true} className="characters-sidebar">
            <div className="sidebar-content">
                <h2>Personagens</h2>
                <div className="characters-sidebar-input">
                    <p>Carregar Personagens:</p>
                    <div className="characters-sidebar-btns">
                        <Input placeholder="Código do personagem" width="100" update={updateText} />
                        <Button width="100" click={() => load(hash)}>
                            Carregar
                        </Button>
                    </div>
                </div>
                <div>
                    <p>Personagens disponíveis:</p>
                    <div>
                        {characters.length > 0
                            ? characters.map(c => <Char key={c._id} char={c} />)
                            : <p>{"Nenhum :("}</p>}
                    </div>
                </div>
            </div>
        </Sidebar>
    );
};

export default CharactersSidebar;
