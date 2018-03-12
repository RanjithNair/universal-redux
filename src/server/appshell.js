import serialize from 'serialize-javascript'
const AppShell = (state, markup) => (
  `<!DOCTYPE html>
      <html>
        <head>
          <title>SSR with RR</title>
          <script src="/bundle.js" defer></script>
          <script>window.__INITIAL_STATE__ = ${serialize(state)}</script>
        </head>
        <body>
          <div id="app">${markup}</div>
        </body>
      </html>`
)
export default AppShell
