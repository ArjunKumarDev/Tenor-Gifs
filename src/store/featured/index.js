import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    featuredList: {
        next: 1,
        results: [],
    },
    searchedResults: [],
}

export const featureSlice = createSlice({
    name: 'featured',
    initialState,
    reducers: {
        setFeaturedGifs: (state, { payload = {} }) => {
            let storeData = {
                results: [...state?.featuredList?.results, ...payload?.results],
                next: payload?.next || 1,
            }
            state.featuredList = storeData
        },

        setTrendingFeaturedGifs: (state, { payload = {} }) => {
            if (payload?.status === 'new') {
                state.searchedResults = []
            }
            let storeData = {
                results: [...state?.searchedResults, ...payload?.results],
                next: payload?.next || 1,
            }

            state.searchedResults = storeData.results
            state.featuredList = storeData
        },
    },
})

export const getFeaturedGifs =
    ({ pos = '', limit = 5 }) =>
    async (dispatch) => {
        try {
            const response = await fetch(
                `${process.env.REACT_APP_BASE_URL}featured?key=${process.env.REACT_APP_API_KEY}&media_filter=mediumgif&random=true&limit=${limit}&pos=${pos}`
            )

            const data = await response.json()

            dispatch(setFeaturedGifs(data))
        } catch (err) {
            console.error(err)
        }
    }

export const searchGifs =
    ({ searchValue, pos = '', status = 'new' }) =>
    async (dispatch) => {
        const response = await fetch(
            `https://g.tenor.com/v2/search?q=${searchValue}&key=${process.env.REACT_APP_API_KEY}&media_filter=mediumgif&limit=5&pos=${pos}`
        )

        const data = await response.json()
        data['status'] = status

        dispatch(setTrendingFeaturedGifs(data, status))
    }
export const {
    setFeaturedGifs,
    setTrendingFeaturedGifs,
    setTrendingScrollFeaturedGifs,
} = featureSlice.actions

export default featureSlice.reducer
