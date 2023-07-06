import { configureStore } from "@reduxjs/toolkit";
import attributeReducer from "../slices/chooseAttrSlice";

export const store = configureStore({
    reducer: {
        chooseAttr: attributeReducer,
    },
});

// Tirado da documentação:
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch