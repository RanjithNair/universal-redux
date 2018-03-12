import { combineReducers } from 'redux'
import SampleReducer from '../shared/Sample/Reducer'
const rootReducer = combineReducers({
  sample: SampleReducer
})

export default rootReducer
