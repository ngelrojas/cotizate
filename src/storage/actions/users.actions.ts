import { 
  LOADING_USER,
  SET_UNAUTHENTICATED,
  SET_USER
} from "../types";

import { Users } from "../../api/users.api";
//TODO: create another reducer for 
// return errors about authenticaed
export const CurrentUser = (token: string) => (dispatch: any) => {
  const user = new Users(token);
  dispatch({type: LOADING_USER});
  user.currentUser()
      .then((resp: any) => {
        dispatch({
        type: SET_USER,
        payload: resp.data.data
      })
    }).catch((error: any) => {
      console.error(error)
      dispatch({
        type: SET_UNAUTHENTICATED,
        payload: error
      })
    })

}
