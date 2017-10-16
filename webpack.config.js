const path = require('path')
module.exports = [
	{
		devtool: 'source-map',
		entry: {
			index: './index.js',
		},
		output: {
			path: path.resolve(__dirname, './dist'),
			filename: '[name].js',
			libraryTarget: 'umd'
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: [/node_modules/],
					use: 'babel-loader?cacheDirectory'
				}
			]
		},
		plugins: [],
		watchOptions: {
			ignored: [/node_modules|dist/]
		}
	}
]
