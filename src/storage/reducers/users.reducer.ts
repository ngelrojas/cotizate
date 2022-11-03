import {
  SET_USER,
  SET_UPDATE_USER,
  SET_DELETE_USER,
  SET_DELETE_ERROR,
  SET_UPDATE_ERROR,
} from '../types';

const initialState = {
  authenticated: false,
  data: {},
  errors: {}
}

export const UserReducer = (state = initialState, action: any) => {
  switch(action.type){
    case SET_USER:
      return {
        authenticated: true,
        data: action.payload
      }
    case SET_UPDATE_USER:
      return {
        data: action.payload
      }
    case SET_DELETE_USER:
      return {
        data: action.payload
      }
    case SET_UPDATE_ERROR:
      return {
        errors: action.payload
      }
    case SET_DELETE_ERROR:
      return{
        errors: action.payload
      }
    default:
      return state;
  }
}
