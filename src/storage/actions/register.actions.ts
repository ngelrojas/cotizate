import {
    LOADING_USER,
  SET_REGISTER,
  SET_REGISTER_ERROR
} from '../types';

import { RegisterUser } from '../../api/register.api';

const record = new RegisterUser();

export const registerUser = (dataRegister: any) => (dispatch: any) => {
  dispatch({type: LOADING_USER});
  record.register(dataRegister)
    .then((resp: any) => {
      dispatch({
        type: SET_REGISTER,
        payload: resp.data.data
      });
    }).catch((err: any) => {
      dispatch({
        type: SET_REGISTER_ERROR,
        payload: err
      });
    }); 
}
