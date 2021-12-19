import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { propertyApi } from "./testApi";


export const store = configureStore({
  reducer: {
    [propertyApi.reducerPath]: propertyApi.reducer,
  },
 
});

setupListeners(store.dispatch);
