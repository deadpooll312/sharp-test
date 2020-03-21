import api from '../../axios-api';

export const LIST = 'LIST';
export const LIST_PENDING = 'LIST_PENDING';
export const LIST_REJECTED = 'LIST_REJECTED';
export const LIST_FULFILLED = 'LIST_FULFILLED';

export function initList() {
  return dispatch => {
    dispatch({
      type: LIST,
      payload: api.get('api/protected/transactions').then(res => res.data)
    }).catch(() => undefined);
  }
}
