module.exports = {
  plugins: [
    require('stylelint')({
      configFile: 'stylelint.config.js',
    }),
    require('postcss-extend'),
    require('precss'),
    require('postcss-preset-env'),
    require('postcss-nested'),
    require('autoprefixer')(),
    require('postcss-reporter'),
  ],
}
