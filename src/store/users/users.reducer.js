import { USERS_FULFILLED, USERS_PENDING, USERS_REJECTED } from "./users.action";

const inintialState = {
  loading: false,
  data: [],
  error: null
}

export default function users(state = inintialState, action) {
  switch(action.type) {
    case USERS_FULFILLED:
      return {...state, ...{data: action.payload, loading: false, error: null}};
    case USERS_PENDING:
      return {...state, ...{loading: true}};
    case USERS_REJECTED:
      return {...state, ...{data: [], loading: false, error: action.payload}};
    default:
      return state;
  }
}
