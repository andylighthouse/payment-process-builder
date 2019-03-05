import { ADD_FAVORITE } from "../actions/favorite"

const initialState = {
  favorites: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.concat(action.favorite),
      }
    default:
      return state
  }
}

export default reducer
