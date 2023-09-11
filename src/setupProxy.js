// setupProxy.js  파일이름

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (WrapComponent) => {
   
    WrapComponent.use(
        "/bbs",
        createProxyMiddleware({
            "target":"http://localhost:8080",
            changeOrigin: true
        })
    )
    
}