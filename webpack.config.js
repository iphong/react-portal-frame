const path = require('path')

module.exports = [
	{
		devtool: 'source-map',
		entry: {
			index: './src/frame.js'
		},
		output: {
			path: path.resolve(__dirname, './dist'),
			filename: '[name].js',
			libraryTarget: 'commonjs'
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
			react: 'react',
			'react-dom': 'react-dom',
			'prop-types': 'prop-types'
		},
		plugins: [],
		watchOptions: {
			ignored: [/node_modules/]
		}
	}
]
