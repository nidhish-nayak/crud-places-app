import { configureStore } from "@reduxjs/toolkit";
import inputReducer from "../features/input/inputSlice";
import modalReducer from "../features/modal/modalSlice";

export const store = configureStore({
	reducer: {
		modal: modalReducer,
		input: inputReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
