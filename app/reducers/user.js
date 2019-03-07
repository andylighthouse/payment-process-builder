import { AsyncStorage } from "react-native"
import { SAVE_USER } from "../actions/user"

const initialState = {
  email: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USER:
      if (action.email) {
        AsyncStorage.setItem("userEmail", action.email)
      }
      return {
        ...state,
        email: action.email || state.email,
      }
    default:
      return state
  }
}
export default reducer
