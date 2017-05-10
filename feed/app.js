import React from 'react'
import { render } from 'react-dom'
import { fromJS } from 'immutable'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducers from './modules'

import ActivityFeed from './components/ActivityFeed'

import getState from './data'

const store = createStore(reducers, getState(), window.devToolsExtension ? window.devToolsExtension() : noop => noop)

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./modules', () => store.replaceReducer(require('./modules')))
}

render(
  <Provider store={ store }>
    <ActivityFeed />
  </Provider>,
  document.getElementById('app-container')
)
