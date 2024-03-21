//配置webpack
module.exports = {
    // 入口文件
    entry: './src/index.js',
    // 出口文件
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
        clean: true
    },
    module: {
        // loaders: [
        //     {
        //         test: /\.js$/,
        //         loader: 'babel-loader'
        //     }
        // ]
    },
    mode: 'development'
}