import { createProxyMiddleware } from 'http-proxy-middleware';

export default createProxyMiddleware({
  target: process.env.TARGET_URL,
  changeOrigin: true,
  pathRewrite: {
    '^/api/proxy': '/',
  },
});
