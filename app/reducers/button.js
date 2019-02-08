import { GET_DATA, CONVERSION_ERROR, CONVERSION_RESULT } from "../actions/button"

const initialState = { error: null }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        ...action.result,
      }
    case CONVERSION_ERROR:
      return { ...state, error: action.error }
    case CONVERSION_RESULT:
      return { ...state, ...action.result }
    default:
      return state
  }
}

export default reducer
