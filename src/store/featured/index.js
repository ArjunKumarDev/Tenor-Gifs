import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  featuredList: {
    next: 1,
    results: [],
  },
  searchedResults: [],
};

export const featureSlice = createSlice({
  name: "featured",
  initialState,
  reducers: {
    setFeaturedGifs: (state, { payload = {} }) => {
      console.log("featpay", typeof payload?.next);
      console.log("featpayy", payload?.next);

      let storeData = {
        results: [...state?.featuredList?.results, ...payload?.results],
        next: payload?.next || 1,
      };
      state.featuredList = storeData;
    },

    setTrendingFeaturedGifs: (state, { payload = {} }) => {
      let storeData = {
        results: [...state?.searchedResults, ...payload?.results],
        next: payload?.next || 1,
      };
      state.featuredList = storeData;
    },
  },
});

export const getFeaturedGifs =
  ({ pos = "", limit = 10 }) =>
  async (dispatch) => {
    try {
      const response = await fetch(
        `https://tenor.googleapis.com/v2/featured?key=AIzaSyArRaTfvKnXxO6yhU8GxRL9TSty7tYHbUs&media_filter=gif&random=true&limit=${limit}&pos=${pos}`
      );

      const data = await response.json();

      dispatch(setFeaturedGifs(data));
    } catch (err) {
      console.error(err);
    }
  };

export const searchGifs =
  ({ searchValue, pos = "" }) =>
  async (dispatch) => {
    const response = await fetch(
      `https://g.tenor.com/v2/search?q=${searchValue}&key=AIzaSyArRaTfvKnXxO6yhU8GxRL9TSty7tYHbUs&media_filter=gif&limit=10&pos=${pos}`
    );

    const data = await response.json();

    dispatch(setTrendingFeaturedGifs(data));
  };
export const { setFeaturedGifs, setTrendingFeaturedGifs } =
  featureSlice.actions;

export default featureSlice.reducer;
