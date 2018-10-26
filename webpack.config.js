var config = {
    entry: './app/main.js',
    output: {
        path: __dirname + '/build',
        filename: 'buldle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
}

module.exports = config;