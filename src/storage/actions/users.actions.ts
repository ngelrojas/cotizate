import { 
  LOADING_USER,
  SET_UNAUTHENTICATED,
  SET_USER,
  SET_UPDATE_USER,
  SET_DELETE_USER,
  SET_UPDATE_ERROR,
  SET_DELETE_ERROR
} from "../types";

import { Users } from "../../api/users.api";

const token: string | any = window.sessionStorage.getItem('token')

const user = new Users(token);

export const CurrentUser = () => (dispatch: any) => {
  dispatch({type: LOADING_USER});
  user.currentUser()
      .then((resp: any) => {
        dispatch({
          type: SET_USER,
          payload: resp.data.data
        })
    }).catch((err: any) => {
      dispatch({
        type: SET_UNAUTHENTICATED,
        payload: err
      })
    })
}

export const UpdateUser = (data:any, userId: number) => (dispatch: any) => {
  user.updateUser(data, userId)
    .then((resp: any) => {
      dispatch({
        type: SET_UPDATE_USER,
        payload: resp.data.data
      });
    }).catch((err: any) => {
      dispatch({
        type: SET_UPDATE_ERROR,
        payload: err 
      })
    })
}

export const DeleteUser = (userId: number) => (dispatch: any) => {
  user.deleteUser(userId)
    .then((resp: any) => {
      dispatch({
        type: SET_DELETE_USER,
        payload: resp.data.data
      })
    }).catch((err: any) => {
      dispatch({
        type: SET_DELETE_ERROR,
        payload: err
      })
    })
}
