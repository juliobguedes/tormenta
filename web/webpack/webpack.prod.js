const path = require('path');
const merge = require('webpack-merge');

const parentDir = path.join(__dirname, '../../');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: 'main.js',
        path: path.resolve(parentDir, 'docs')
    }
});