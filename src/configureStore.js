import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { browserHistory } from 'react-router';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import addNum from './Redux/reducers';
import rootEpic from './Redux/epics';

const epicMiddleware = createEpicMiddleware(rootEpic);

const reducers = combineReducers({
  rootReducer: addNum,
  routing: routerReducer
})

export default function configureStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    reducers,
    composeEnhancers(
      applyMiddleware(
        epicMiddleware,
        routerMiddleware(browserHistory)
      )
    )
  );
  return store;
}
