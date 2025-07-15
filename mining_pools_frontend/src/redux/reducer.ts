import { combineReducers } from 'redux'
import { infoSlice } from './info'
import { miningPoolsSlice } from './mining-pools'

const reducer = combineReducers({
  info: infoSlice.reducer,
  miningPools: miningPoolsSlice.reducer
})

export default reducer
