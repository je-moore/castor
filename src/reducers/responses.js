import { SET_VALUE } from '../actions'

const initialResponses = {
  eyeResponse: -1,
  verbalResponse: -1,
  motorResponse: -1
}

const responses = (state = initialResponses, action) => {
  switch (action.type) {
    case SET_VALUE:
      const { name, value } = action.payload
      return { ...state, [name]: Number(value) }
    default:
      return state
  }
}

export default responses