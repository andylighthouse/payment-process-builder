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
  build: { _type: null },
  isBuilding: true,
  error: null,
}

const updateBuild = (state, action) => {
  return {
    ...state.build,
    _type: action.fundingSource,
  }
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
        build: {
          ...state.build,
          [state.build["auth_with"]]: {
            ...state.build,
            id: action.id,
            _type: action.fundingSource,
          },
        },
      }
    case SAVE_CREDIT_CARD_ID:
      return { ...state, build: { ...state.build, id: action.id, _type: action.fundingSource } }
    case SAVE_MCCFILTER_ID:
      return {
        ...state,
        build: {
          ...state.build,
          [state.build["auth_with"]]: {
            ...state.build,
            id: action.id,
            _type: action.fundingSource,
          },
        },
      }
    default:
      return state
  }
}

export default reducer
