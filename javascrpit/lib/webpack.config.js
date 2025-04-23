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
                loader: 'babel-loader',
                // 如果对已经编译过的文件再进行编译可能会增加文件大小和错误，因此这里最好还是指定
                exclude: /node_modules/
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.d.ts', '.js']
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].min.js',
        library: 'JsBridge',
        libraryExport: ['default'],
        libraryTarget: 'umd'
    },
    mode: 'production',
    // mode: 'development',
    optimization: {
        minimizer: [
            new TerserPlugin({
                include: [/\.min\.js$/]
            }),
        ]
    }
}

module.exports = config