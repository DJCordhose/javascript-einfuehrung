module.exports = {
    entry: "./src/main.js",
    output: {
        path: __dirname,
        filename: "public/dist/bundle.js"
    },
    module: {
        loaders: [
            {test: /\.jsx?$/, exclude: /node_modules/,  loader: 'babel'}
        ]
    },
    devtool: 'source-map'

};
