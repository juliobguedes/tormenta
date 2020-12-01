import Feat from './Feat';

const getFeats = async (cachedFeats) => {
    if (cachedFeats) return cachedFeats;
    const feats = await Feat.find().sort({ nomeRegex: 1 });
    return feats;
};

const getFeatById = async (featId, cachedFeat) => {
    if (cachedFeat) return cachedFeat;
    const feat = await Feat.findById(featId);
    return feat;
};

const getFeatsById = async (featIds) => {
    const feats = await Feat.find({ _id: { $in: featIds } });
    return feats;
};

export {
    getFeats,
    getFeatById,
    getFeatsById,
};
