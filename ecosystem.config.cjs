module.exports = {
  apps: [
    {
      name: 'nuxtstarter-web',
      script: '.output/server/index.mjs',
      env: {
        NODE_ENV: 'production',
        HOST: process.env.HOST || '0.0.0.0',
        PORT: process.env.PORT || 3355,
      },
    },
  ],
}
