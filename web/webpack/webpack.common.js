const path = require('path');
const parentDir = path.join(__dirname, '../');

const htmlWP = require('html-webpack-plugin');
const HtmlWebpackPlugin = new htmlWP({
    template: './src/index.html',
    filename: 'index.html',
});

module.exports = {
    entry: path.join(parentDir, 'src/index.js'),
    output: {
        path: path.resolve(parentDir, 'dist'),
        filename: 'main.[contentHash].js'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader']
        }, {
            test: /\.(png|svg|jp(e*)g|gif)$/,
            use: ['file-loader']
        }]
    },
    plugins: [HtmlWebpackPlugin],
    resolve: {
        extensions: ['.js', '.jsx']
    }
};
