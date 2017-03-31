// import { createStore, applyMiddleware } from 'redux'
// import thunkMiddleware from 'redux-thunk'


// export const startClock = () => dispatch => {
//   return setInterval(() => dispatch({ type: 'TICK', light: true, ts: Date.now() }), 800)
// }

// export const initStore = (initialState) => {
//   return createStore(reducer, initialState, applyMiddleware(thunkMiddleware))
// }
import nextConnectRedux from 'next-connect-redux'
import { createStore, applyMiddleware } from 'redux'
import { reducer } from './reducer'
import thunkMiddleware from 'redux-thunk'

export const startClock = () => dispatch => {
  return setInterval(() => dispatch({ type: 'TICK', light: true, ts: Date.now() }), 800)
}

export const initStore = (initialState) => {
  return createStore(reducer, initialState, applyMiddleware(thunkMiddleware))
}

export const nextConnect = nextConnectRedux(initStore)