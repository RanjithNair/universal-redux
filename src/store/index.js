if (process.env.NODE_ENV === 'production') {
  module.exports = require('./index.dev')
} else {
  module.exports = require('./index.dev')
}
