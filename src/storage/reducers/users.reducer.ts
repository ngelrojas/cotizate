import {
  SET_USER
} from '../types';

const initialState = {
  data: {}
}

export const UserReducer = (state = initialState, action: any) => {
  switch(action.type){
    case SET_USER:
      return {
        data: action.payload
      }
    default:
      return state;
  }
}
