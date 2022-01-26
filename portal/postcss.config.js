const AddPrefixPostcssPlugin = require('add-prefix-postcss-plugin')

module.exports = {
  plugins: [
    AddPrefixPostcssPlugin({
      prefix: 'portal'
    })
  ]
}
