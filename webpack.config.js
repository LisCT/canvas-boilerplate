const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: './src/bundle.js',
    output: {
        path: __dirname + '/public/js',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        }]
    },
    plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            server: { baseDir: ['public'] },
            files: ['./public/*']
        }),
    ],
    watch: true,
    devtool: 'source-map'
};