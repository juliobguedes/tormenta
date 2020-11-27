const checkNotFound = (obj, name) => {
    if (obj === null || obj.length === 0) {
        throw new Error(`${name} not found.`);
    }
};

const genHash = (length) => {
    let hash = '';
    let chrIdx;
    const chars = 122 - 65;
    while (true) {
        if (hash.length === 5) break;
        chrIdx = 65 + Math.floor(Math.random() * chars);
        if (chrIdx < 91 || chrIdx > 97) {
            hash += String.fromCharCode(chrIdx);
        }
    }
    return hash;
}

export {
    checkNotFound,
    genHash,
}
