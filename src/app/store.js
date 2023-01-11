import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../features/counter/counterSlice";
import videoReducer from "../features/videoLib/videoSlice";

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    video: videoReducer,
  },
});
