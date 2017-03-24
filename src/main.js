import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'

import Beer from './Beer'

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import {Provider} from 'react-redux';
import reducer from './reducer'

import {watchForLoadBeer} from './brewApi';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(watchForLoadBeer)

ReactDOM.render(
	<Provider store={store}>
  <Beer />
  </Provider>,
  document.getElementById('root')
);