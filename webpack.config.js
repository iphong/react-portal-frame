const path = require('path')

module.exports = [
	{
		devtool: 'source-map',
		entry: {
			index: './demo/index.js'
		},
		output: {
			path: path.resolve(__dirname, './demo'),
			filename: '[name].bundle.js',
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
			ignored: [/node_modules/]
		}
	}
]
