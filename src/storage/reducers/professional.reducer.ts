import {
  SET_PPROFILES,
  SET_PPROFILES_ERROR,
  SET_PPROFILE,
  SET_PPROFILE_ERROR,
  SET_CREATE_PP,
  SET_CREATE_PP_ERROR,
  SET_UPDATE_PP,
  SET_UPDATE_PP_ERROR,
  SET_DELETE_PP,
  SET_DELETE_PP_ERROR
} from '../types';

const initialState = {
  data: {},
  errors: {}
}

export const ProfessionalReducer = (state = initialState, action: any) => {
  switch(action.type){
    case SET_PPROFILES:
      return {
        data: action.payload
      }
    case SET_PPROFILES_ERROR:
      return {
        errors: action.payload 
      }
    case SET_PPROFILE:
      return {
        data: action.payload
      }
    case SET_PPROFILE_ERROR:
      return {
        errors: action.payload 
      }
    case SET_CREATE_PP:
      return {
        data: action.payload
      }
    case SET_CREATE_PP_ERROR:
      return {
        errors: action.payload 
      }
    case SET_UPDATE_PP:
      return {
        data: action.payload
      }
    case SET_UPDATE_PP_ERROR:
      return {
        errors: action.payload 
      }
    case SET_DELETE_PP:
      return {
        data: action.payload
      }
    case SET_DELETE_PP_ERROR:
      return {
        errors: action.payload 
      }
    default:
      return state;
  }
}
