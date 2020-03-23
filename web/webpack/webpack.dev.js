const path = require('path');
const merge = require('webpack-merge');

const parentDir = path.join(__dirname, '../');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        contentBase: path.resolve(parentDir, 'dist'),
        historyApiFallback: true
    },
    output: {
        publicPath: '/'
    }
});
