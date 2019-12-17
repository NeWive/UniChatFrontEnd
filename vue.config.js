const target = 'http://47.102.140.37:10010';

module.exports = {
    devServer: {
        port: 8081,
        proxy: {
            '/signup': {
                target,
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/signup': ''
                }
            }
        }
    }
};
