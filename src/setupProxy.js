// only needed if you want to proxy API requests locally:
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://fakestoreapi.com',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    })
  );
};
