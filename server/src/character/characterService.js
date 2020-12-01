import * as HashService from '../hash/HashService';
import Character from './Character';
import { checkNotFound } from  '../lib/util';

const getCharacter = async (hash, cache) => {
    if (cache) return cache;
    const char = await Character.find({ hash });
    checkNotFound(char, 'Character');
    return char[0];
};

const updateCharacter = async (hash, character) => {
    const updated = await Character.findByIdAndUpdate(
        character._id, character, { new: true }
    );
    checkNotFound(updated, 'Character');
    return updated;
};

const createCharacter = async (character) => {
    console.log(character);
    const hash = await HashService.createHash();
    const charObj = { ...character, hash: hash.hash };
    const char = await Character.create(charObj);
    return char;
};

export {
    getCharacter,
    updateCharacter,
    createCharacter,
}
