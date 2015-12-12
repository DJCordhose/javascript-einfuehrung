module.exports = {
    entry: "./main.ts",
    output: {
        path: __dirname,
        filename: "public/dist/bundle.js"
    },
    module: {
        loaders: [
            {test: /\.tsx?$/, loader: 'ts-loader'}
        ]
    },
    devtool: 'source-map'

};
