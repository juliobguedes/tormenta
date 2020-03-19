import Feat from './Feat';

const getFeats = async () => {
    const feats = await Feat.find().sort({ nomeRegex: 1 });
    return feats;
};

export {
    getFeats,
}
