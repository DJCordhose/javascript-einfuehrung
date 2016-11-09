module.exports = {
    entry: "./src/main.js",
    output: {
        path: __dirname,
        filename: "public/dist/bundle.js"
    },
    module: {
        preLoaders: [
            {test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/}
        ],
        loaders: [
            {test: /\.js?$/, exclude: /node_modules/,  loader: 'babel'}
        ]
    },
    devtool: 'inline-source-map'

};
