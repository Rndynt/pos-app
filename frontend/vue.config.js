const path = require('path');

module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://backend:3000',
                changeOrigin: true
            }
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
            },
            extensions: ['.ts', '.js', '.vue', '.json']
        },
    },
};
