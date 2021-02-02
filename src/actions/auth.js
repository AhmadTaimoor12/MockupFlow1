import {LOGIN_USER} from './types'

export const login=(payload)=> {
    console.log(payload)
    return dispatch => {
            dispatch({
            type:LOGIN_USER,
            payload
        })
    };
  }
