import { SET_AUTHENTICATED, SET_UNAUTHENTICATED } from '../storage/types';
import { CurrentUser } from '../storage/actions/users.actions';
import store from '../storage/stores';

export const CheckAuth = () => {

  const authToken = window.sessionStorage.getItem('token');

  if(authToken){

    store.dispatch({
      type: SET_AUTHENTICATED,
      payload: authToken
    })

    store.dispatch(CurrentUser());

    return true;
  }else{

    // store.dispatch({
    //   type: SET_UNAUTHENTICATED
    // })

    return false;
  }

}
