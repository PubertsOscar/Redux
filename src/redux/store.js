import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import { postApi } from "./postsSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    [postApi.reducerPath] : postApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
    // used for caching and invalidation purposes/ more performant
});
