import * as Actions from './ActionTypes'
export const initialState = {
}

export default function SampleReducer (state = initialState, { type, payload }) {
  switch (type) {
    case Actions.SET_SAMPLE_DATA:
      return Object.assign({}, state, payload)
    default:
      return state
  }
}
