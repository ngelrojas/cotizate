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
SET_DELETE_PP_ERROR,
LOADING_USER
} from '../types';

import { Professional } from '../../api/professional.api';

const token: string | any = window.sessionStorage.getItem('token');

const profile = new Professional(token);

export const ListAll = () => (dispatch: any) => {
  dispatch({type: LOADING_USER});
  profile.all()
    .then((resp: any) => {
      dispatch({
        type: SET_PPROFILES,
        payload: resp.data.data
      })
    }).catch((err: any) => {
      dispatch({
        type: SET_PPROFILES_ERROR,
        payload: err
      })
    })
}

export const Retrieve = (profileId: number) => (dispatch: any) => {
  dispatch({type: LOADING_USER});
  profile.retrieve(profileId)
    .then((resp: any) => {
      dispatch({
        type: SET_PPROFILE,
        payload: resp.data.data
      })
    }).catch((err: any) => {
      dispatch({
        type: SET_PPROFILE_ERROR,
        payload: err
      })
    })
}

export const Create = (dataProfile: any) => (dispatch: any) => {
  dispatch({type: LOADING_USER});
  profile.create(dataProfile)
    .then((resp: any) => {
      dispatch({
        type: SET_CREATE_PP,
        payload: resp.data.data
      })
    }).catch((err: any) => {
      dispatch({
        type: SET_CREATE_PP_ERROR,
        payload: err
      })
    })
}

export const Update = (dataProfile: any, profileId: number) => (dispatch: any) => {
  dispatch({type: LOADING_USER});
  profile.update(dataProfile, profileId)
    .then((resp: any) => {
      dispatch({
        type: SET_UPDATE_PP,
        payload: resp.data.data
      });
    }).catch((err: any) => {
      dispatch({
        type: SET_UPDATE_PP_ERROR,
        payload: err
      });
    });
}

export const Delete = (profileId: number) => (dispatch: any) => {
  dispatch({type: LOADING_USER});
  profile.delete(profileId)
    .then((resp: any) => {
      dispatch({
        type: SET_DELETE_PP,
        payload: resp.data.data
      });
    }).catch((err: any) => {
      dispatch({
        type: SET_DELETE_PP_ERROR,
        payload: err
      });
    });
}
