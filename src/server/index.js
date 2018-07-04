import http from 'http'
import app from './server'

const server = http.createServer(app)
let currentApp = app
const listener = server.listen(process.env.PORT || 3000, () => {
  console.log(`Server is listening on port: ${listener.address().port}`)
})

if (module.hot) {
  module.hot.accept('./server', () => {
    server.removeListener('request', currentApp)
    server.on('request', app)
    currentApp = app
  })
}
