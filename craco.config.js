const CracoLessPlugin = require('craco-less');
const path = require('path');
const {
    CracoAliasPlugin,
    configPaths
} = require('react-app-rewire-alias')
const fastRefreshCracoPlugin = require('craco-fast-refresh');

const selfStyle = require('./src/style/commom-less.json')
const aliasMap = configPaths('./tsconfig.path.json')

module.exports = {
    babel: {
        plugins: [
            ['import', {
                libraryName: 'antd',
                libraryDirectory: 'es',
                style: true,
            }]
        ],
    },
    plugins: [{
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: selfStyle,
                        javascriptEnabled: true,
                    }
                },
            },
        }, {
            plugin: CracoAliasPlugin,
            options: {
                alias: aliasMap
            }
        }, {
            plugin: fastRefreshCracoPlugin
        }
    ],
    webpack: {
        configure: (webpackConfig, {
            env,
            paths
        }) => {
            paths.appBuild = 'dist'
            webpackConfig.output = {
                ...webpackConfig.output,
                path: path.resolve(__dirname, 'dist'), // 修改输出文件目录
                publicPath: '/'
            }
            return webpackConfig
        },

    },
};