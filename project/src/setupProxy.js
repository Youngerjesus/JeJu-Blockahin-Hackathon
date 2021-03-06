const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/c',
        createProxyMiddleware({
            target: 'http://localhost:5000',
            changeOrigin: true,
            secure: false
        })
    );

    app.use(
        '/socket',
        createProxyMiddleware({
            target: 'http://localhost:5000',
            changeOrigin: true,
            ws:true,
            secure: false
        }),
    )
};