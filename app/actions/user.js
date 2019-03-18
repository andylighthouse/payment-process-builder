export const SAVE_USER = "SAVE_USER"
export const CONVERSION_RESULT = "CONVERSION_RESULT"
export const CONVERSION_ERROR = "CONVERSION_ERROR"

export const LOADFROMAPI = "LOADFROMAPI"

export const saveUser = user => ({
  type: SAVE_USER,
  user,
})

export const loadFromApi = () => ({
  type: LOADFROMAPI,
})
