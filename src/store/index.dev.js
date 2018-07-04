import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'
import { routerMiddleware } from 'react-router-redux'

export default function configureStore (initialState, history = null) {
  console.log('insie config store')
  console.log('initial state: ' + JSON.stringify(initialState))
  /* Middleware
   * Configure this array with the middleware that you want included
   */
  let middleware = [thunk]

  if (history) {
    middleware.push(routerMiddleware(history))
  }

  // Add universal enhancers here
  let enhancers = []

  const composeEnhancers =
    (typeof window !== 'undefined' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose
  const enhancer = composeEnhancers(
    ...[applyMiddleware(...middleware), ...enhancers]
  )

  // create store with enhancers, middleware, reducers, and initialState
  const store = createStore(rootReducer, initialState, enhancer)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./rootReducer.js', () => {
      const nextRootReducer = require('./rootReducer').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
