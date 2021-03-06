const express = require('express')
const proxy = require('http-proxy-middleware');

const do_proxy = (path, target) => proxy(path, {
	target: target,
	secure: true,
	changeOrigin: true,
	cookieDomainRewrite: "localhost",
	logLevel: 'debug',
	pathRewrite: { [`^${path}`]: '/' } 
})

const proxies = [
	['/search/feedback', 'http://search-feedback-service.apps.test.cirrostratus.org'],
	['/labs', 'https://firefly.jstor.org'],
	['/', 'https://firefly.jstor.org']
]

const app = express()
proxies.forEach(p => app.use('/', do_proxy(...p)))
app.listen(4000, () => 
	console.log('listening on port 4000'))
