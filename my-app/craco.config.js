/* craco.config.js */
module.exports = {
	// ...
	webpack: {
		configure: {
			resolve: {
				symlinks: false,
			},
		},
	},
};