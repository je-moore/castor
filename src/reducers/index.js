import { SET_VALUE, SUBMIT_FORM } from "../actions"

const initialState = {
  glasgowComaScore: null,
  responses: {
    eyeResponse: -1,
    verbalResponse: -1,
    motorResponse: -1
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VALUE:
      const { name, value } = action.payload
      return {
        ...state,
        responses: {
          ...state.responses,
          [name]: Number(value)
        }
      }
    case SUBMIT_FORM:
      return !state.glasgowComaScore ? {
        ...state,
        glasgowComaScore: action.payload,
      } : initialState
    default:
      return state
  }
}

export default reducer