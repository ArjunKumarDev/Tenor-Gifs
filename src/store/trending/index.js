import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trendingList: [],
  searchText: "",
};

export const trendingSlice = createSlice({
  name: "trending",
  initialState,
  reducers: {
    setTrendingGifs: (state, { payload }) => {
      state.trendingList = payload;
    },
    setSearchText: (state, { payload }) => {
      state.searchText = payload;
    },
  },
});

export const getTrendingGifs = () => async (dispatch) => {
  try {
    const response = await fetch(
      "https://tenor.googleapis.com/v2/categories?key=AIzaSyArRaTfvKnXxO6yhU8GxRL9TSty7tYHbUs&media_filter=gif&type=trending&limit=10"
    );

    const data = await response.json();

    dispatch(setTrendingGifs(data?.tags));
  } catch (err) {
    console.error(err);
  }
};

export const { setTrendingGifs, setSearchText } = trendingSlice.actions;

export default trendingSlice.reducer;
