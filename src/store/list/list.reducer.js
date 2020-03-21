import { LIST_FULFILLED, LIST_PENDING, LIST_REJECTED } from "./list.action";

const inintialState = {
  loading: false,
  error: null,
  data: [],
}

export default function list(state = inintialState, action) {
  switch(action.type) {
    case LIST_FULFILLED:
      return {...state, ...{data: action.payload, loading: false}};
    case LIST_PENDING:
      return {...state, ...{loading: true}};
    case LIST_REJECTED:
      return {...state, ...{loading: false, error: action.payload}};
    default:
      return {...state, ...{error: null, data: []}};
  }
}
