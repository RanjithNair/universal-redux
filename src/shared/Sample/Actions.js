import * as ActionTypes from './ActionTypes'
import { push } from 'react-router-redux'

export const getSampleData = () => async (dispatch, getState) => {
  try {
    const data = await fetch('http://localhost:3000/api/sample').then(data => data.json())
    dispatch({
      type: ActionTypes.SET_SAMPLE_DATA,
      payload: data
    })
    dispatch(push('/foo'))
  } catch (error) {
    throw error
  }
}
