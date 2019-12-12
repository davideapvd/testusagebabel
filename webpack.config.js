module.exports = {
   "stats": {
        "warnings": false
 },

module: {
  rules: [
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
      }
    }
  ]
}
}
