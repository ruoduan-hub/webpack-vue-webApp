const path = require("path")
const webpack = require('webpack')
const htmlwebpackplugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')//vue-loader 插件

module.exports = {
    entry: path.join(__dirname, './src/main.js'),//入口文件
    
    output: {//出口文件
        path: path.join(__dirname, './src/dist'),//输出文件夹
        filename: 'bundle.js'//输出文件名
    },
    plugins: [//第三方插件
        new webpack.HotModuleReplacementPlugin(),//热更新模块启用
        new htmlwebpackplugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html'
        }),
        // vue-loader 插件
        new VueLoaderPlugin()
    ],
    module: {//配置第三方loader 模块
        rules: [//正则-文件匹配规则
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },//配置处理.css 的第三方loader规则
            { test: /\.scss$/, use:['style-loader', 'css-loader', 'sass-loader']},//sass
            { test: /\.(png|jpg|gif)$/, use: 'url-loader?limit=1' },//处理路径
            { test: /\.(eot|svg|ttf|woff|woff2)$/, use: 'url-loader'}, //处理字体文件的loader 配置项
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },//babel loader模块 Pexclude【排除】 npm包模块
            { test: /\.vue$/, use: 'vue-loader' }//处理 .vue loader
        ]
    },
    resolve: {//修改vue 被导包的路径
        alias: {
            //"vue$": "vue/dist/vue.js"
        }
    },
    devServer: {
        //跨域代理
        proxy:  {
            '/apiNews/*': {
            target: 'http://is.snssdk.com/api/news/feed/v75/?fp=FlTqL25rL2cuFlc', // 目标服务器地址
            secure: false, // 目标服务器地址是否是安全协议
            changeOrigin: true, // 是否修改来源, 为true时会让目标服务器以为是webpack-dev-server发出的请求!
            // '/api/login' =>    target + '/login'
            pathRewrite: {'^/api': '/'} // 将/api开头的请求地址, /api 改为 /, 即 /api/xx 改为 /xx
            },
            '/img/*': {
                target: 'https://source.unsplash.com/300x300/?book,library', // 目标服务器地址
                secure: false, // 目标服务器地址是否是安全协议
                changeOrigin: true, // 是否修改来源, 为true时会让目标服务器以为是webpack-dev-server发出的请求!
                // '/api/login' =>    target + '/login'
                pathRewrite: {'^/img': '/'} // 将/api开头的请求地址, /api 改为 /, 即 /api/xx 改为 /xx
                }
        }
    },
    mode: "development"// |prouduction | none;

}