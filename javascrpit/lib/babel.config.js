/*
 * @Author: shenzhiwei shenzhiwei@orientsec.com.cn
 * @Date: 2025-04-14 14:45:42
 * @LastEditors: shenzhiwei shenzhiwei@orientsec.com.cn
 * @LastEditTime: 2025-04-23 10:39:03
 * @FilePath: /lib/babel.config.js
 * @Description: Babel配置
 */
const config = {
    presets: [
        [
            // targets(该配置用.browserslistrc替代),useBuiltIns等选项用于编译出兼容目标环境的代码
            // 而无需在代码中直接引入import '@babel/polyfill',避免输出的包过大,同时开发者又可以放心使用各种新语法特性
            // 是babel-preset-es2015/2016/2017/lastest预设的合集
            '@babel/preset-env',
            {
                // 模块导出类型
                modules: false,
                // 根据实际代码中使用的ES6/ES7代码,以及与你指定的targets，按需引入对应的polyfill
                useBuiltIns: 'usage',
                // 同时需要安装包core-js@3
                corejs: 3.39,
                // // 打印调试日志
                // "debug": false,
                // // 浏览器支持情况
                targets: {
                    ios: '12',
                    android: '7'
                }
            }
        ],
        // [
        //     '@babel/preset-typescript',
        //     {
        //         allowDeclareFields: true
        //     }
        // ],
    ],
    plugins: [
        // // 避免多次编译helper函数和polyfill全局污染问题
        // ['@babel/plugin-transform-runtime', {
        //     // 同时需要安装包@babel/runtime-corejs3,其包含helpers和core-js
        //     'helpers': true, // 提取公共运行时代码helpers
        //     'corejs': 3, // 提供polyfill
        //     'regenerator': true, // 可避免全局作用域代码的污染
        //     'useESModules': false, // 默认false，如果是true将不会将ES模块转化为CommonJS模块，这样会减小打包体积
        // }],

        // 以下添加了proposal阶段的提案，这些提案已被确定
        // 解析类的属性和方法,使其可以使用箭头函数直接使用this作用域
        ['@babel/plugin-proposal-class-properties'],
        // 支持对象展开符
        ['@babel/plugin-proposal-object-rest-spread'],
        // 解析装饰器
        [
            '@babel/plugin-proposal-decorators',
            {
                legacy: true
            }
        ],
    ]
}

module.exports = config
