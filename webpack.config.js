const path = require('path')
const webpack = require('webpack')

module.exports = [
	{
		entry: './src/index.js',
		output: {
			path: path.resolve(__dirname, './dist'),
			filename: 'index.js',
			libraryTarget: 'umd'
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: [/node_modules/],
					use: 'babel-loader?compact&cacheDirectory'
				}
			]
		},
		externals: {
			react: {
				commonjs: 'react',
				commonjs2: 'react',
				amd: 'react',
				root: 'React'
			},
			'react-dom': {
				commonjs: 'react-dom',
				commonjs2: 'react-dom',
				amd: 'react-dom',
				root: 'ReactDOM'
			},
			'prop-types': {
				commonjs: 'prop-types',
				commonjs2: 'prop-types',
				amd: 'prop-types'
			},
			'styled-components': {
				commonjs: 'styled-components',
				commonjs2: 'styled-components',
				amd: 'styled-components'
			}
		},
		plugins: [
			new webpack.optimize.UglifyJsPlugin({
				mangle: true,
				minimize: true,
				comments: false,
				compress: {
					screw_ie8: true,
					warnings: false,
					drop_console: true,
					dead_code: true,
					unused: true
				}
			})
		]
	}
]
