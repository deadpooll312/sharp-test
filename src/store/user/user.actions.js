import api from '../../axios-api';

export const USER = 'USER';
export const USER_FULFILLED = 'USER_FULFILLED';
export const USER_REJECTED = 'USER_REJECTED';
export const USER_PENDING = 'USER_PENDING';
export const USER_UPDATE = 'USER_UPDATE';
export const USER_CLEAR = 'USER_CLEAR';
const actionClearUser = () => ({type: USER_CLEAR});

export function initUser(data) {
  return dispatch => {
    dispatch({
      type: USER,
      payload: api.post('users', data).then(res => res.data)
    })
  }
}

export function loginUser(data) {
  return dispatch => {
    dispatch({
      type: USER,
      payload: api.post('sessions/create', data).then(res => res.data)
    });
  }
}

export function updateUser() {
  return dispatch => {
    dispatch({
      type: USER,
      payload: api.get('/api/protected/user-info').then(res => res.data.user_info_token)
    });
  }
}

export function clearUser() {
  return dispatch => {
    localStorage.clear();
    dispatch(actionClearUser());
  }
}
