const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = milkman => {
  milkman.use(
    '/categoryProducts',
    createProxyMiddleware({
      target: 'https://mm-react-fe-interview-task.herokuapp.com',
      changeOrigin: true,
    })
  );
};
