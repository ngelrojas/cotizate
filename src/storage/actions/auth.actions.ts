import { 
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  LOADING_USER
} from "../types";

import { Auth } from '../../api/auth.api';
import { CurrentUser } from './users.actions';

interface AuthData {
  email: string;
  password: string;
}

const auth = new Auth();

export const SignIN = (authData: AuthData) => (dispatch: any) => {
  dispatch({type: LOADING_USER});
  auth.login(authData)
    .then((resp: any) => {
      dispatch({
        type: SET_AUTHENTICATED,
        payload: resp.data.token
      });

      dispatch(CurrentUser(resp.data.token));

    }).catch((error: any) => {
      dispatch({
        type: SET_UNAUTHENTICATED,
        payload: error
      }) 
    })
}


