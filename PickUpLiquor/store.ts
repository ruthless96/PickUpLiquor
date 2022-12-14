import { createStore, MiddlewareAPI, Dispatch, AnyAction, applyMiddleware, compose, } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';

import reducer from './component/reducers';

const initialState = {
    user: {
      isLoggingIn: false,
      data: null,
    },
    posts: [],
  };

const firstMiddleware = (store: MiddlewareAPI) => (next: Dispatch<AnyAction>) => (action: AnyAction) => {
    console.log('로깅', action);
    next(action);
}

const thunkMiddleware = (store: MiddlewareAPI) => (next: Dispatch<AnyAction>) => (action: any) => {
    if (typeof action === 'function') { // 비동기
        return action(store.dispatch, store.getState);
    }
    return next(action); // 동기
}
const enhancer = process.env.NODE_ENV === 'production'
? compose(
    applyMiddleware(
      firstMiddleware,
      thunkMiddleware,
    ),
  )
  : composeWithDevTools(
    applyMiddleware(
      firstMiddleware,
      thunkMiddleware,
    ),
  );

export const store = createStore(reducer, initialState, enhancer);

// export const persistor = (persistStore(store));

// export default { store, persistor };
export default store;