module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'public/service-worker.js',
    },
    publicPath: '/vuejs-pwa-push/'
  }
}
