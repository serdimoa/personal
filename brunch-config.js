exports.config = {
  hot: true,

  files: {
    javascripts: { joinTo: { 'app.js': /^node_modules/ } },
    stylesheets: { joinTo: 'app.css' },
  },

  plugins: {
    babel: { presets: ['es2015', 'react'] },
    sass: {
      modules: false,
    },
  },
};
