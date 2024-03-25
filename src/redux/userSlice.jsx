import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const initialStart = createAsyncThunk(
  "user/getCode",
  async ({ payload }) => {
    let response = await fetch(
      process.env.REACT_APP_SPOTIFY_BASE_SEARCH_URL + "/me",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${payload.token}`,
        },
      }
    );
    let responseJSON = await response.json();

    return responseJSON;
  }
);
export const getSpotifySearchByGenre = createAsyncThunk(
  "spotify/search/by/genre",
  async ({ payload }) => {
    let response = await fetch(
      `${process.env.REACT_APP_SPOTIFY_BASE_SEARCH_URL_GENRE}${payload.genre}&type=artist&type=track`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${payload.token}`,
        },
      }
    );
    let responseJSON = await response.json();

    return responseJSON;
  }
);

/**
 * TODO
 *  getSpotifyUserPlaylistNextTracks might no longer be in service or needed
 */
export const getSpotifyUserPlaylistNextTracks = createAsyncThunk(
  "spotify/get/user/playlist/tracks",
  async ({ payload }) => {
    let response = await fetch(`${payload.spotifyNextUrl}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${payload.token}`,
      },
    });
    let responseJSON = await response.json();

    return responseJSON;
  }
);
export const getSpotifyUserPlaylistById = createAsyncThunk(
  "spotify/get/user/playlist",
  async ({ payload }) => {
    console.log(payload, "PAYLOAD_TOKEN");
    let response = await fetch(
      `${process.env.REACT_APP_SPOTIFY_BASE_SEARCH_URL_USERS_PLAYLIST}/${payload.id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${payload.token}`,
        },
      }
    );
    let responseJSON = await response.json();

    return responseJSON;
  }
);
export const getSpotifyTopTracksShort = createAsyncThunk(
  "spotify/get/tracks",
  async ({ payload }) => {
    let response = await fetch(
      `${process.env.REACT_APP_SPOTIFY_BASE_SEARCH_URL_TOP_TRACKS_SHORT}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${payload.token}`,
        },
      }
    );
    let responseJSON = await response.json();

    return responseJSON;
  }
);

export const getSpotifyTopTracksMedium = createAsyncThunk(
  "spotify/get/tracks/M",
  async ({ payload }) => {
    let response = await fetch(
      `${process.env.REACT_APP_SPOTIFY_BASE_SEARCH_URL_TOP_TRACKS_MEDIUM}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${payload.token}`,
        },
      }
    );
    let responseJSON = await response.json();

    return responseJSON;
  }
);

export const getSpotifyTopTracksLong = createAsyncThunk(
  "spotify/get/tracks/L",
  async ({ payload }) => {
    let response = await fetch(
      `${process.env.REACT_APP_SPOTIFY_BASE_SEARCH_URL_TOP_TRACKS_LONG}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${payload.token}`,
        },
      }
    );
    let responseJSON = await response.json();

    return responseJSON;
  }
);

export const spotifyClientInfo = createAsyncThunk(
  "user/getCode",
  async ({ payload }) => {
    let response = await fetch(
      process.env.REACT_APP_SPOTIFY_BASE_SEARCH_URL + "/me",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${payload.token}`,
        },
      }
    );
    let responseJSON = await response.json();

    return responseJSON;
  }
);
export const spotifyPlaylistInfo = createAsyncThunk(
  "user/getPlaylist",
  async ({ payload }) => {
    let response = await fetch(
      process.env.REACT_APP_SPOTIFY_BASE_SEARCH_URL + "/me/playlists",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${payload.token}`,
        },
      }
    );
    let responseJSON = await response.json();

    return responseJSON;
  }
);
export const userSlice = createSlice({
  name: "users",
  initialState: {
    spotifyToken: "",
    spotifyProfileData: [],
    spotifyTopPlaylistData: [],
    spotifyTopArtistData: [],
    spotifyTopTracksData: [],
    spotifyUserPlaylistById: [],
    spotifyUserPlaylistByIdHeaderData: [],
  },
  reducers: {
    setSpotifyTokens: (state, action) => {
      switch (action.payload.type) {
        case "SPOTIFY_TOKENS": {
          state.spotifyToken = action.payload.payload;
          const checkToken = localStorage.getItem("spotify_access_token");
          if (checkToken !== state.spotifyToken) {
            state.spotifyToken = checkToken;
          }
          return state;
        }

        default:
          return console.log(action);
      }
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(registerUser.fulfilled, (state, action) => {
    //   console.log("REGISTER_USER_ACTION", action);
    // });
    // builder.addCase(loginUser.fulfilled, (state, action) => {
    //   console.log("LOGIN_USER_ACTION", action);
    // });
    builder.addCase(spotifyClientInfo.fulfilled, (state, action) => {
      let data = action.payload;
      state.spotifyProfileData = data;
      console.log("LOGIN_USER_ACTION", action.payload);
    });

    builder.addCase(
      getSpotifyUserPlaylistById.fulfilled,
      (state, action) => {
        console.log(state, "BUILDER_STATE");
        console.log(action, "BUILDER_ACTION");
        let data = action.payload.tracks.items;
        let headerData = action.payload;
        console.log(headerData, "HEADER_DATA");
        console.log(data, "TRACKS");
        state.spotifyUserPlaylistByIdHeaderData = headerData;
        state.spotifyUserPlaylistById = data;
      }
    );
    builder.addCase(
      getSpotifyUserPlaylistNextTracks.fulfilled,
      (state, action) => {
        console.log(state, "BUILDER_STATE");
        console.log(action.payload, "BUILDER_ACTION");
        let data = action.payload.items;
        console.log(data, "TRACKS");

        state.spotifyUserPlaylistById = [
          data,
          ...state.spotifyUserPlaylistById,
        ];
      }
    );

    builder.addCase(
      getSpotifyTopTracksShort.fulfilled,
      (state, action) => {
        console.log(state, "BUILDER_STATE");
        console.log(action, "BUILDER_ACTION");
        let tracks = action.payload.items;
        console.log(tracks, "TRACKS");
        state.spotifyTopTracksData = tracks;
      }
    );

    builder.addCase(
      getSpotifyTopTracksMedium.fulfilled,
      (state, action) => {
        console.log(state, "BUILDER_STATE");
        console.log(action, "BUILDER_ACTION");
        let tracks = action.payload.items;
        console.log(tracks, "TRACKS");
        state.spotifyTopTracksData = tracks;
      }
    );
    builder.addCase(getSpotifyTopTracksLong.fulfilled, (state, action) => {
      console.log(state, "BUILDER_STATE");
      console.log(action, "BUILDER_ACTION");
      let tracks = action.payload.items;
      console.log(tracks, "TRACKS");
      state.spotifyTopTracksData = tracks;
    });
    builder.addCase(spotifyPlaylistInfo.fulfilled, (state, action) => {
      console.log(action, "PLAYIST_ACTION");
      state.spotifyTopPlaylistData = action.payload.items;
    });

    builder.addCase(getSpotifySearchByGenre.fulfilled, (state, action) => {
      console.log(action, "PLAYIST_ACTION");
      state.spotifySearchByGenre = action.payload.artists.items;
    });
  },
});

export const { setSpotifyTokens } = userSlice.actions;
export default userSlice.reducer;
