module.exports = {
    entry: [
        './src/actions.js'
    ],

    output: {
        path: './',
        publicPath: '/',
        filename: 'bundle.js'
    },

    devServer : {
        inline: true
    },

    module: {
        loaders: [
            { test: /\.jsx$/, loader: 'babel', exclude: [/node_modules/, /public/] },
            { test: /\.js$/, loader: 'babel', exclude: [/node_modules/, /public/] },
            {test: /\.css/, loader: 'style-loader!css-loader'},
            {test: /\.less$/, loader:  'style!css!less'},
        ]
    },
};
