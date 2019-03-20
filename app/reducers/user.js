import { SAVE_USER, LOGOUT_USER } from "../actions/user"

const initialState = {
  user: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USER:
      if (action.user) {
        return {
          ...state,
          user: action.user,
        }
      }
    case LOGOUT_USER:
      return {
        ...state,
        user: null,
      }
    default:
      return state
  }
}
export default reducer
