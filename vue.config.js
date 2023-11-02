
const SitemapPlugin = require('sitemap-webpack-plugin').default
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');
// You can write the paths as an array of strings or an array of objects
const paths = [
  {
      path: '/',
      lastmod: '2021-11-22',
      priority: 1.0,
      changefreq: 'yearly'
  },
  {
      path: '/contact-us/',
      lastmod: '2021-11-22',
      priority: 0.9,
      changefreq: 'yearly'
  },
  {
	path: '/find-a-lawyer/',
	lastmod: '2021-11-22',
	priority: 0.9,
	changefreq: 'daily'
},
{
	path: '/contact-us/',
	lastmod: '2021-11-22',
	priority: 0.9,
	changefreq: 'yearly'
},
{
	path: '/sign-up/',
	lastmod: '2021-11-22',
	priority: 0.9,
	changefreq: 'yearly'
},
{
	path: '/sign-in/',
	lastmod: '2021-11-22',
	priority: 0.9,
	changefreq: 'yearly'
},

]

module.exports = {
	runtimeCompiler: true,
	css: {
		extract: true,
	  },
	configureWebpack: {
		plugins: [
		  // Add the ImageminWebpWebpackPlugin configuration
		  new ImageminWebpWebpackPlugin({
			config: [{
			  test: /\.(jpe?g|png)/,
			  options: {
				quality: 75
			  }
			}],
			overrideExtension: true,
			detailedLogs: false,
			silent: false,
			strict: true
		  })
		]
	  },

	chainWebpack: config => {
		config
			.plugin('html')
			.tap(args => {
				args[0].title = 'Dial A Lawyer Nigeria'
				
				return args
			})
			    // Add the SitemapPlugin configuration
				config
				.plugin('sitemap')
				.use(SitemapPlugin, [
				  {
					base: 'https://ng.dialalawyer.africa',
					paths: paths,
					options: {
					  filename: 'sitemap.xml',
					  lastmod: true,
					  skipgzip: true,
					  changefreq: 'weekly',
					},
				  },
				]);
	},
	
}
