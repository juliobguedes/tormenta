import React, { useState, useEffect } from 'react';
import CharactersSidebar from './sidebar/CharactersSidebar';
import FeatContext from '../featList/FeatContext';
import FeatCard from '../featList/featCard/FeatCard';
import { Input, Button } from '../common';

import axiosInstance from '../../lib/axiosInstance';

import './CharactersPage.css';

const CharactersPage = () => {
    const [characters, setCharacters] = useState([]);
    const [currentChar, setCurrentChar] = useState({ talentosAdicionados: [] });
    const [charNome, setCharNome] = useState('');

    useEffect(() => {
        const char = JSON.parse(localStorage.getItem('currentChar'));
        if (char.nome) {
            setCharNome(char.nome);
        }
        console.log('CHAR', char);
        setCurrentChar(char);
        const chars = JSON.parse(localStorage.getItem('characters'));
        setCharacters(chars);
    }, []);

    const loadChar = (hash) => {
        axiosInstance.get(`/character/${hash}`).then(res => {
            setCharNome(res.data.nome);
            setCurrentChar(res.data);
        }).catch(err => {
            console.log(err);
        })
    }

    const removeFeat = (feat) => {
        const feats = currentChar.talentosAdicionados.filter(f => f._id !== feat._id);
        const updated = {...currentChar, talentosAdicionados: feats };
        setCurrentChar(updated);
    };

    const saveUpdate = () => {
        const char = { ...currentChar, nome: charNome, talentosAdicionados: currentChar.talentosAdicionados.map(f => f._id) }
        if (currentChar.hash) {
            axiosInstance.put(`/character/${currentChar.hash}`, char).then(res => {
                const { data } = res;
                setCharNome(data.nome);
                setCurrentChar(data);
                
                localStorage.setItem('currentChar', JSON.stringify(data));
            }).catch(err => {
                console.log(err);
            });
        } else {
            axiosInstance.post(`/character`, char).then(res => {
                const { data } = res;
                const updatedCharacters = characters;
                updatedCharacters.push(data);
                setCharNome(data.nome);
                setCurrentChar(data);
                setCharacters(updatedCharacters);
                localStorage.setItem('currentChar', JSON.stringify(data));
                localStorage.setItem('characters', JSON.stringify(updatedCharacters));
            }).catch(err => {
                console.log(err);
            });
        }
    }

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
                    <FeatContext.Provider value={{ sidebarFeats: currentChar.talentosAdicionados, updateSidebar: removeFeat }}>
                        {currentChar ? currentChar.talentosAdicionados.map(feat => (
                            <FeatCard
                              key={feat._id}
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

export default CharactersPage;
