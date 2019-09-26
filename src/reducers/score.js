import { SUBMIT_FORM } from "../actions"

export const glasgowComaScore = (state = null, action) => {
  console.log(state, action.payload, action.type)
  switch (action.type) {
    case SUBMIT_FORM:
      return state ? null : action.payload
    default:
      return state
  }
}

// export glasgowComaScore