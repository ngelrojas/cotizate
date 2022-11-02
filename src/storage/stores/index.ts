import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';
import { AuthReducer } from '../reducers/auth.reducer';
import { UserReducer } from '../reducers/users.reducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose
  } 
}
const initialState = {}
const reducer = combineReducers({
  auth: AuthReducer,
  user: UserReducer 
})

const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(reduxThunk),
       window.__REDUX_DEVTOOLS_EXTENSION__ &&
       (window.__REDUX_DEVTOOLS_EXTENSION__() as any)
  )

);

export default store;



