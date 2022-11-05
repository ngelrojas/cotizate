import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';
import { AuthReducer } from '../reducers/auth.reducer';
import { UserReducer } from '../reducers/users.reducer';
import { ProfessionalReducer } from '../reducers/professional.reducer';
import { RegisterReducer } from '../reducers/register.reducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose
  } 
}
const initialState = {}
const reducer = combineReducers({
  register: RegisterReducer,
  auth: AuthReducer,
  user: UserReducer,
  professional: ProfessionalReducer
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



