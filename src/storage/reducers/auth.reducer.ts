import { 
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED
} from "../types";

const initialState = {
  authenticated: false,
  token: {},
  error: '',
}

export const AuthReducer = (state = initialState, action: any) => {
  
  switch(action.type){

    case SET_AUTHENTICATED:
      return {
        authenticated: true,
        token: action.payload
      }
    case SET_UNAUTHENTICATED:
      return {
          authenticated: false,
          message: action.payload.message,
          code: action.payload.code,
          status: action.payload.response.status,
          errors: action.payload.response.data
      } 

    default:
      return state;
  }
}


