const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

const config = {
    entry: {
        index: './src/index.ts'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                    // {
                    //     loader: 'ts-loader',
                    //     options: { transpileOnly: true },
                    // }
                ],
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.d.ts', '.js']
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'JsBridge.min.js',
        globalObject: 'this',
        library: {
            name: 'JsBridge',
            type: 'window',
        }
    },
    mode: 'production',
    // mode: 'development',
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false,
                include: [/\.min\.js$/]
            }),
        ]
    }
}

module.exports = config