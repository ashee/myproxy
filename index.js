const express = require('express')
const proxy = require('http-proxy-middleware');

const do_proxy = (path, target) => proxy(path, {
	target: target,
	changeOrigin: true,
	cookieDomainRewrite: "localhost",
	logLevel: 'debug',
	pathRewrite: { [`^${path}`]: '/' } 
})

const proxies = [
	['/search/feedback', 'http://search-feedback-service.apps.prod.cirrostratus.org'],
	['/labs', 'http://firefly.jstor.org'],
	['/myjstor', 'http://firefly.jstor.org']
]

const app = express()
proxies.forEach(p => app.use('/', do_proxy(...p)))
app.listen(4000, () => 
	console.log('listening on port 4000'))
