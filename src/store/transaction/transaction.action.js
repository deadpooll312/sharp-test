import api from '../../axios-api';

export const TRANSACTION = 'TRANSACTION';
export const TRANSACTION_FULFILLED = 'TRANSACTION_FULFILLED';
export const TRANSACTION_REJECTED = 'TRANSACTION_REJECTED';
export const TRANSACTION_PENDING = 'TRANSACTION_PENDING';

export function createTransaction(data) {
  return dispatch => {
    dispatch({
      type: TRANSACTION,
      payload: api.post('api/protected/transactions', data).then(res => res.data)
    }).catch(() => undefined);
  }
}
