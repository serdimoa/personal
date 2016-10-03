exports.config = {
  hot: true,

  files: {
    javascripts: { joinTo: 'app.js' },
    stylesheets: { joinTo: 'app.css' },
  },

  plugins: {
    babel: { presets: ['es2015', 'react'] },
    sass: {
      modules: false,
    },
    conventions: {
      ignored: ['node_modules'],
    },
    browserSync: {
      port: 3333,
      logLevel: 'debug',
      tunnel: 'serdimoa',
    }

  },
};
