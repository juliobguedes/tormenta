import Feat from './Feat';

const getFeats = async () => {
    const feats = await Feat.find().sort({ nomeRegex: 1 });
    return feats;
};

const getFeatById = async (featId) => {
    const feat = await Feat.findById(featId);
    return feat;
}

export {
    getFeats,
    getFeatById,
}
