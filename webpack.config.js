// Webpack.config.js
const path = require('node:path');

module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
	entry: {
		main: './src/index.ts',
	},
	output: {
		path: path.resolve(__dirname, './build'),
		filename: '[name]-bundle.js', // <--- Will be compiled to this single file
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
			},
		],
	},
};
