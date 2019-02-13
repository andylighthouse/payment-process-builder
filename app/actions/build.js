export const GET_DATA = "GET_DATA"
export const CONVERSION_ERROR = "CONVERSION_ERROR"
export const CONVERSION_RESULT = "CONVERSION_RESULT"
export const PICK_FUNDING_SOURCE = "PICK_FUNDING_SOURCE"
export const SAVE_ACCOUNT_ID = "SAVE_ACCOUNT_ID"
export const SAVE_CREDIT_CARD_ID = "SAVE_CREDIT_CARD_ID"
export const SAVE_MCCFILTER_ID = "SAVE_MCCFILTER_ID"
// import store from "../config/store"

export const getData = () => ({
  type: GET_DATA,
})

export const pickFundingSource = (fundingSource, currentState) => {
  return {
    type: PICK_FUNDING_SOURCE,
    fundingSource: fundingSource,
  }
}

export const saveAccountId = id => ({
  type: SAVE_ACCOUNT_ID,
  id,
  fundingSource: "Account",
})

export const saveCreditCardId = id => ({
  type: SAVE_CREDIT_CARD_ID,
  id,
  fundingSource: "CreditCard",
})

export const saveMccFilterId = id => ({
  type: SAVE_MCCFILTER_ID,
  id: id,
  fundingSource: "MccFilter",
})
// console.log(store.getState())
