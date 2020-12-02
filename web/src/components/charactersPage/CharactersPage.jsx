import React, { useState, useEffect } from 'react';
import CharactersSidebar from './sidebar/CharactersSidebar';
import FeatContext from '../featList/FeatContext';
import FeatCard from '../featList/featCard/FeatCard';
import { Input, Button } from '../common';
import AppContext from '../app/AppContext';

import axiosInstance from '../../lib/axiosInstance';

import './CharactersPage.css';

const CharactersPage = ({
    currentChar, updateCurrent, addChar, characters, updateChars,
}) => {
    const [charNome, setCharNome] = useState(currentChar.nome || '');

    const loadChar = (hash) => {
        axiosInstance.get(`/character/${hash}`).then(({ data }) => {
            addChar(data);
            setCharNome(data.nome);
        }).catch(err => {
            console.log(err);
        });
    };

    const removeFeat = (feat) => {
        const feats = currentChar.talentosAdicionados.filter(f => f._id !== feat._id);
        const updated = {...currentChar, talentosAdicionados: feats };
        updateCurrent(updated);
    };

    const saveUpdate = () => {
        const char = { ...currentChar, nome: charNome, talentosAdicionados: currentChar.talentosAdicionados.map(f => f._id) }
        console.log(char);
        if (currentChar.hash) {
            axiosInstance.put(`/character/${currentChar.hash}`, char).then(({ data }) => {
                setCharNome(data.nome);
                const newChar = { ...data, talentosAdicionados: currentChar.talentosAdicionados };
                updateCurrent(newChar);
                addChar(newChar);
            }).catch(err => {
                console.log(err);
            });
        } else {
            axiosInstance.post(`/character`, char).then(({ data }) => {
                const newChar = { ...data, talentosAdicionados: currentChar.talentosAdicionados }
                setCharNome(data.nome);
                addChar(newChar)
                updateCurrent(newChar);
            }).catch(err => {
                console.log(err);
            });
        }
    };

    const updateNome = (ev) => { setCharNome(ev.target.value); };

    return (
        <div className="characters-page">
            <div className="characters-content">
                <div className="characters-header">
                    <h2>Personagem atual:</h2>
                    <p>
                        Após salvar, será gerado um código.
                        Use-o para carregar seu personagem futuramente
                    </p>
                    <Input
                      placeholder="Personagem em Rascunho"
                      value={charNome}
                      update={updateNome}
                      width="90"
                    />
                    <Button click={saveUpdate} width="100">
                        {currentChar.hash ? `Salvar - ${currentChar.hash}` : "Criar"}
                    </Button>
                    <h3>Talentos:</h3>
                </div>
                <div>
                    <FeatContext.Provider value={{
                        sidebarFeats: currentChar.talentosAdicionados, updateSidebar: removeFeat
                    }}>
                        {currentChar ? currentChar.talentosAdicionados.map(feat => (
                            <FeatCard
                              key={feat._id || feat}
                              feat={feat}
                              inSidebar={true}
                              hasSidebar={true}
                            />
                        )) : null}
                    </FeatContext.Provider>
                </div>
            </div>
            <CharactersSidebar load={loadChar} characters={characters} />
        </div>
    );
};

const CharactersPageContainer = () => (
    <AppContext.Consumer>
        {(props) => (
            <CharactersPage {...props} />
        )}
    </AppContext.Consumer>
)

export default CharactersPageContainer;
