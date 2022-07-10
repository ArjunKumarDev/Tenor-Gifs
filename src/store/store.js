import { configureStore, combineReducers } from '@reduxjs/toolkit'
import featureSlice from './featured'
import trendingSlice from './trending'

const rootReducer = combineReducers({
    featuredGifs: featureSlice,
    trendingGifs: trendingSlice,
})

const store = configureStore({
    reducer: rootReducer,
})

export default store
