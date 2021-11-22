const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				navblack: '#131722',
				bodyblack: '#434651',
				bluea: '#2962FF',
				textwhite: '#D1D4DC',
				highlight: '#223251',
				blueb: '#1e222d',
				greytxt: '#787B86',
				greyhov: '#2a2e39'

			},
			fontFamily: {
				'fam': 'Trebuchet MS,roboto, ubuntu, sans-serif',
			   },
		}
	},

	plugins: []
};

module.exports = config;
