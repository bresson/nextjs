// import { createStore, applyMiddleware } from 'redux'
// import thunkMiddleware from 'redux-thunk'


// export const startClock = () => dispatch => {
//   return setInterval(() => dispatch({ type: 'TICK', light: true, ts: Date.now() }), 800)
// }

// export const initStore = (initialState) => {
//   return createStore(reducer, initialState, applyMiddleware(thunkMiddleware))
// }
import nextConnectRedux from 'next-connect-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { reducer } from './reducer'
import thunkMiddleware from 'redux-thunk'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas'

export const startClock = () => dispatch => {
  console.log('starting clock')
  return setInterval(() => dispatch({ type: 'TICK', light: true, ts: Date.now() }), 800)
}

const sagaMiddleware = createSagaMiddleware();



export const initStore = (initialState) => {
  var _store = createStore(
                      reducer, 
                      initialState, 
                      applyMiddleware(thunkMiddleware, sagaMiddleware));
  sagaMiddleware.run(rootSaga)

  return _store                    
}



export const nextConnect = nextConnectRedux(initStore)