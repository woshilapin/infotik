import path from 'path';

export default {
	"target": 'web',
	"context": path.resolve(__dirname, 'src/scripts/'),
	"entry": {
		"sort-bubble": './sort/bubble.jsx',
	},
	"output": {
		"path": path.resolve(__dirname, 'dist/scripts'),
		"filename": '[name].bundle.js',
	},
	"module": {
		"rules": [
			{
				"test": /\.jsx?$/,
				"exclude": /node_modules/,
				"loader": 'babel-loader',
			},
		],
	},
};
