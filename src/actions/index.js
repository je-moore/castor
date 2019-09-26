export const SET_VALUE = "SET_VALUE"
export const SUBMIT_FORM = "SUBMIT_FORM"

export function setValue(name, value) {
  return {
    type: SET_VALUE,
    payload: { name, value }
  }
}

export function submitForm(eyeResponse, verbalResponse, motorResponse) {
  return { 
    type: SUBMIT_FORM,
    payload: eyeResponse + verbalResponse + motorResponse
  }
}