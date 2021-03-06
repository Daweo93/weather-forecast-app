import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers';
import ReduxPromise from 'redux-promise'; 

const configureStore = () => {
  const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
  const store = createStoreWithMiddleware(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  if (process.env.NODE_ENV !== "production") {
    if (module.hot) {
      module.hot.accept('./reducers', () => {
        store.replaceReducer(
          rootReducer,
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        );
      })
    }
  }

  return store;
};

export default configureStore;