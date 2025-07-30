// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import topicsReducer from '../features/topics/topicsSlice'; // import your topics slice

const store = configureStore({
  reducer: {
    topics: topicsReducer,
  },
});

export default store;

