const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
    app.use('/api', createProxyMiddleware({
        target : 'http://localhost:5000/', // 통신할 서버 도메인주소
        changeOrigin: true,
    }));
}