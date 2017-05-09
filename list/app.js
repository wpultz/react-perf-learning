import React from 'react'
import { render } from 'react-dom'
import { List } from 'immutable'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import listReducer from './modules/list'

import ItemList from './components/ItemList'

const init = new Array(5000).fill('a')
const initialState = List(init)

const store = createStore(listReducer, initialState, window.devToolsExtension ? window.devToolsExtension() : noop => noop)

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./modules/list', () => store.replaceReducer(require('./modules/list')))
}

render(
  <Provider store={ store }>
    <ItemList />
  </Provider>,
  document.getElementById('app-container')
)
