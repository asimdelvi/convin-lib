import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchVideos = async () => {
  const data = await fetch("http://localhost:3004/videos");
  const res = await data.json();
  return res;
};

const initialState = {
  videos: [],
};

export const retrieveVideos = createAsyncThunk("videos/retrieve", async () => {
  const res = await fetchVideos();
  return res;
});

const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {},
  extraReducers: {
    [retrieveVideos.fulfilled]: (state, action) => {
      state.videos = action.payload;
    },
  },
});

const { reducer } = videoSlice;
export default reducer;
