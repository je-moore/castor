import { SET_VALUE, SUBMIT_FORM } from '../actions'

const initialState = {
  glasgowComaScore: "",
  eyeResponse: -1,
  verbalResponse: -1,
  motorResponse: -1,
  submitted: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VALUE:
      const { name, value } = action.payload
      return {
        ...state, [name]: Number(value)
      }
    case SUBMIT_FORM:
      return !state.submitted ? {
        ...state,
        glasgowComaScore: action.payload,
        submitted: true        
      } : initialState
    default:
      return state
  }
}

export default reducer