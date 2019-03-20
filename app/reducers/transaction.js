import { TRANSACTION_ERROR, TRANSACTION_RESULT } from "../actions/transaction"

const initialState = {
  transactions: [],
  error: null,
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TRANSACTION_RESULT:
      return {
        ...state,
        transactions: state.transactions.concat(action.result),
      }
    case TRANSACTION_ERROR:
      return {
        ...state,
        error: action.error,
      }
    default:
      return state
  }
}
export default reducer
