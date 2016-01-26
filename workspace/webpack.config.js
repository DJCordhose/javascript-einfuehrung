module.exports = {
    // entry: "./src/es6/main.js",
    entry: "./src/typescript/sandbox.ts",
    output: {
        path: __dirname,
        filename: "public/dist/bundle.js"
    },
    module: {
        loaders: [
            {test: /\.jsx?$/, exclude: /node_modules/,  loader: 'babel'},
            {test: /\.tsx?$/, loader: 'babel!ts-loader'},
            { test: /\.html$/, loader: 'html' }
        ]
    },
    devtool: 'source-map'

};
