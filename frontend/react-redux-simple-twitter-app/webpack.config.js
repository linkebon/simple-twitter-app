const webpack = require('webpack');
const path = require('path');

let outputConf = {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/bundle_simpletwitterapp.js'
};
if (process.env.NODE_ENV === 'production') {
    outputConf.path = path.join(__dirname, '../../public')
}

if (process.env.NODE_ENV === 'dev_play') {
    outputConf.path = path.join(__dirname, '../../public')
}

const config = {
    entry: [
        './src/main.js',
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(svg|png|jpe?g|gif|eot|otf|woff2?|ttf)$/,
                loader: 'url-loader?limit=10000'
            },
            {
                test: require.resolve("jquery"),
                loader: "expose-loader?$!expose-loader?jQuery"
            }
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.css'],
    },
    output: outputConf,
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }

        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default']
        })
    ],
    devServer: {
        inline: true,
        port: 3000,
        historyApiFallback: true,
        watchContentBase: true
    }
};
if (process.env.NODE_ENV === 'production') {
    config.devtool = "cheap-module-source-map"
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({sourceMap: true}),
        new webpack.optimize.AggressiveMergingPlugin({
            minSizeReduce: 1,
            moveToParents: true

        })
    )

} else {
    config.devtool = "cheap-module-eval-source-map"
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({sourceMap: true})
    )
}

module.exports = config;