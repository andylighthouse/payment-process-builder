import {
  GET_DATA,
  CONVERSION_ERROR,
  CONVERSION_RESULT,
  PICK_FUNDING_SOURCE,
  SAVE_ACCOUNT_ID,
  SAVE_CREDIT_CARD_ID,
  SAVE_MCCFILTER_ID,
} from "../actions/build"

const initialState = {
  count: "1",
}
const recursiveLookup = (state, count) => {
  let root = state
  let step = count

  if (root.auth_with) {
    for (var k in root.auth_with) {
      if (root.auth_with[k].step == step) {
        return root.auth_with[k]
      } else if (root.auth_with.length) {
        return recursiveLookup(root.auth_with[k], step)
      }
    }
  } else {
    return root
  }
}

const updateBuild = (state, action) => {
  let step = state.count
  let newState = recursiveLookup(state, state.count)

  if (newState.auth_with === undefined) {
    newState.auth_with = []
  }
  newState.auth_with.push({
    _type: action.fundingSource,
    id: action.id,
    step: step,
  })

  state.count = state.count += "1"
  return { ...state }
}

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
    case PICK_FUNDING_SOURCE:
      return { ...state }
    case SAVE_ACCOUNT_ID:
      return updateBuild(state, action)
    case SAVE_CREDIT_CARD_ID:
      return updateBuild(state, action)
    case SAVE_MCCFILTER_ID:
      return updateBuild(state, action)
    default:
      return state
  }
}

export default reducer
