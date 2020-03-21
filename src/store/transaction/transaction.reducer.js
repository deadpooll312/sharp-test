import { TRANSACTION_FULFILLED, TRANSACTION_PENDING, TRANSACTION_REJECTED } from "./transaction.action";

const inintialState = {
  loading: false,
  data: {},
  error: null
}

export default function transaction(state = inintialState, action) {
  switch(action.type) {
    case TRANSACTION_FULFILLED:
      return {...state, ...{data: action.payload, loading: false, error: null }};
    case TRANSACTION_PENDING:
      return {...state, ...{loading: true}};
    case TRANSACTION_REJECTED:
      return {...state, ...{data: {}, loading: false, error: action.payload}};
    default:
      return {...state, ...{error: null, data: {}}};
  }
}
