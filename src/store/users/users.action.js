import api from '../../axios-api';

export const USERS = 'USERS';
export const USERS_FULFILLED = 'USERS_FULFILLED';
export const USERS_REJECTED = 'USERS_REJECTED';
export const USERS_PENDING = 'USERS_PENDING';

export function filterUsers(filter) {
  return dispatch => {
    dispatch({
      type: USERS,
      payload: api.post('/api/protected/users/list', {filter}).then(res => res.data)
    })
  }
}
