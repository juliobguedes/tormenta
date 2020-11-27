import Hash from './Hash';
import { genHash } from '../lib/util';

const LENGTH = 5;

const createHash = async () => {
    let txt;
    let hash;
    while (true) {
        try {
            txt = genHash(LENGTH);
            hash = await Hash.create({ hash: txt });
            break;
        } catch (error) {
            throw error;
        }
    }
    return hash;
};

export { createHash };
