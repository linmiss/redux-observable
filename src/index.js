import 'rxjs';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './configureStore';
import routes from './router';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
const history = syncHistoryWithStore(
  browserHistory,
  store
);
ReactDOM.render(
    <Provider store={store}>
        <div>
            <Router routes={routes} history={history} />
        </div>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
