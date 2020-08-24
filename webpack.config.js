const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: "inline-source-map",
    plugins: [
        new CopyPlugin(
            [
                { from: './node_modules/swagger-ui/dist/swagger-ui.css', to: './' }
            ]
        )
    ]
}