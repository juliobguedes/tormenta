import Feat from './Feat';

const getFeats = async () => {
    const feats = await Feat.find();
    return feats;
};

export {
    getFeats,
}
