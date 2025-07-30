import { configureStore } from "@reduxjs/toolkit";
import topicsReducer from "../features/topics/topicsSlice"; // ✅ Correct import path

const store = configureStore({
  reducer: {
    topics: topicsReducer // ✅ Valid reducer object
  }
});

export default store;
