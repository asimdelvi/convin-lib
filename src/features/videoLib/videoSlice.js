import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchVideos = async () => {
  const data = await fetch("http://localhost:3004/videos");
  const res = await data.json();
  return res;
};

const createVideo = async (videoData) => {
  const data = await fetch("http://localhost:3004/videos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(videoData),
  });
  const res = await data.json();
  return res;
};

const deleteVideo = async (id) => {
  const data = await fetch(`http://localhost:3004/videos/${id}`, {
    method: "DELETE",
  });
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

export const addNewVideo = createAsyncThunk(
  "videos/addNewVideo",
  async (data) => {
    const res = await createVideo(data);
    return res;
  }
);

export const deleteOneVideo = createAsyncThunk(
  "video/deleteVideo",
  async (id) => {
    await deleteVideo(id);
    return id;
  }
);

const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {},
  extraReducers: {
    [retrieveVideos.fulfilled]: (state, action) => {
      state.videos = action.payload;
    },
    [addNewVideo.fulfilled]: (state, action) => {
      state.videos.push(action.payload);
    },
    [deleteOneVideo.fulfilled]: (state, action) => {
      state.videos = state.videos.filter(
        (video) => video.id !== action.payload
      );
    },
  },
});

const { reducer } = videoSlice;
export default reducer;
