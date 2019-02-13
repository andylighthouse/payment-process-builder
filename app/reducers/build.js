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
  ob: { step: "1" },
}

const updateBuild = (state, action) => {
  let root = state
  let step = state.ob.step
  currentNode = null
  debugger
  if (root.ob.auth_with) {
    for (var k in root.ob.auth_with) {
      if (root.ob.auth_with[k].step == step) {
        currentNode = root.ob.auth_with[k]
      } else if (root.ob.auth_with.length) {
        currentNode = findObjectById(root.ob.auth_with[k], step)
      }
    }
  } else {
    root.ob.auth_with = []
    currentNode = root.ob
  }

  currentNode.auth_with.push({
    type: action.fundingSource,
    id: action.id,
    step: state.ob.step,
    auth_with: [],
  })
  state.ob.step += "1"
  return currentNode
}

const updateAccountId = () => {}

const updateCreditCardId = () => {}

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
      return {
        ...state,

        auth_with: updateBuild(state, action),
      }
    case SAVE_CREDIT_CARD_ID:
      return { ...state, build: { ...state.build, id: action.id, _type: action.fundingSource } }
    case SAVE_MCCFILTER_ID:
      return {
        ob: updateBuild(state, action),
      }
    default:
      return state
  }
}

export default reducer
