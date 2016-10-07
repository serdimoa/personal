exports.config = {
  hot: true,

  files: {
    javascripts: { joinTo: 'app.js' },
    stylesheets: { joinTo: 'app.css' },
  },

  plugins: {
    babel: { presets: ['es2015', 'react'] },
    postcss: {
      processors: [
        require('autoprefixer')(['last 8 versions']),
        require('csswring'),
      ],
    },
    conventions: {
      ignored: ['node_modules'],
    },

  },
};
