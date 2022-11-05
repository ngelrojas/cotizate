import { SET_REGISTER, SET_REGISTER_ERROR } from "../types"


const initialState = {
  data: {},
  errors: {}
}

export const RegisterReducer = (state = initialState, action: any) => {
  switch(action.type){
    case SET_REGISTER:
      return {
        data: action.payload
      }
    case SET_REGISTER_ERROR:
      return {
        errors: action.payload
      }
    default:
      return state;
  }
}
