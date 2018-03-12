import React from 'react'
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from '../store'
import App from '../shared/App'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

const history = createHistory()
const preloadedState = window.__INITIAL_STATE__
delete window.__PRELOADED_STATE__
const store = configureStore(preloadedState, history)

hydrate(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
)
