import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import artistReducer from "./artistSlice";
import playlistReducer from "./playlistSlice";
export default configureStore({
  reducer: {
    users: userReducer,
    artists: artistReducer,
    playlist: playlistReducer,
  },
});
