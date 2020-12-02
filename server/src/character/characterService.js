import * as HashService from '../hash/HashService';
import * as FeatService from '../feats/featService';
import Character from './Character';
import { checkNotFound } from  '../lib/util';

const getFeats = async (char) => {
    const charJson = char.toJSON();
    const feats = await FeatService.getFeatsById(charJson.talentosAdicionados);
    charJson.talentosAdicionados = feats.map(f => f.toJSON());
    return charJson;
}

const getCharacter = async (hash, cache) => {
    if (cache) return cache;
    const char = await Character.find({ hash });
    checkNotFound(char, 'Character');
    const charWithFeats = await getFeats(char[0]);
    return charWithFeats;
};

const updateCharacter = async (hash, character) => {
    const updated = await Character.findByIdAndUpdate(
        character._id, character, { new: true }
    );
    checkNotFound(updated, 'Character');
    const charWithFeats = await getFeats(updated);
    return charWithFeats;
};

const createCharacter = async (character) => {
    const hash = await HashService.createHash();
    const charObj = { ...character, hash: hash.hash };
    const char = await Character.create(charObj);
    const charWithFeats = await getFeats(char);
    return charWithFeats;
};

export {
    getCharacter,
    updateCharacter,
    createCharacter,
}
