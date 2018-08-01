import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { createLogger } from 'redux-logger';
const loggerMiddleware = createLogger();



const initialState = {};

const middleware = [thunk];
export const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware, loggerMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
);
