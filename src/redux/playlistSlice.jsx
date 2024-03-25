import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const spotifyPlaylistByIdTracks = createAsyncThunk(
  "spotify/playlist/id/tracks",
  async ({ payload }) => {
    const id = payload.id;

    let response = await fetch(
      `${process.env.REACT_APP_SPOTIFY_BASE_SEARCH_URL_USERS_PLAYLIST}/${payload.id}/tracks`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${payload.token}`,
        },
      }
    );
    let responseJSON = await response.json();

    return { response: responseJSON, id: id };
  }
);

export const spotifyPlaylistRock = createAsyncThunk(
  "spotify/hardcode/rock/playlists",
  async ({ payload }) => {
    let response = await fetch(
      `${process.env.REACT_APP_SPOTIFY_SEARCH_PLAYLIST_BY_CATEGORY_ROCK}`,
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
export const spotifyPlaylistMetal = createAsyncThunk(
  "spotify/hardcode/metal/playlists",
  async ({ payload }) => {
    let response = await fetch(
      `${process.env.REACT_APP_SPOTIFY_SEARCH_PLAYLIST_BY_CATEGORY_METAL}`,
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
export const spotifyPlaylistFeatured = createAsyncThunk(
  "spotify/hardcode/featured/playlists",
  async ({ payload }) => {
    let response = await fetch(
      `${process.env.REACT_APP_SPOTIFY_SEARCH_PLAYLIST_BY_FEATURED}`,
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
export const spotifyPlaylistHipHop = createAsyncThunk(
  "spotify/hardcode/hiphop/playlists",
  async ({ payload }) => {
    let response = await fetch(
      `${process.env.REACT_APP_SPOTIFY_SEARCH_PLAYLIST_BY_CATEGORY_HIP_HOP}`,
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
export const spotifyPlaylistCountry = createAsyncThunk(
  "spotify/hardcode/country/playlists",
  async ({ payload }) => {
    let response = await fetch(
      `${process.env.REACT_APP_SPOTIFY_SEARCH_PLAYLIST_BY_CATEGORY_COUNTRY}`,
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
export const spotifyPlaylistParty = createAsyncThunk(
  "spotify/hardcode/party/playlists",
  async ({ payload }) => {
    let response = await fetch(
      `${process.env.REACT_APP_SPOTIFY_SEARCH_PLAYLIST_BY_CATEGORY_PARTY}`,
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
export const spotifyPlaylistTechno = createAsyncThunk(
  "spotify/hardcode/techno/playlists",
  async ({ payload }) => {
    let response = await fetch(
      `${process.env.REACT_APP_SPOTIFY_SEARCH_PLAYLIST_BY_CATEGORY_TECHNO}`,
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
export const spotifyPlaylistPunk = createAsyncThunk(
  "spotify/hardcode/punk/playlists",
  async ({ payload }) => {
    let response = await fetch(
      `${process.env.REACT_APP_SPOTIFY_SEARCH_PLAYLIST_BY_CATEGORY_PUNK}`,
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
export const playlistSlice = createSlice({
  name: "playlist",
  initialState: {
    rockPlaylist: [],
    featuredPlaylist: [],
    hipHopPlaylist: [],
    metalPlaylist: [],
    partyPlaylist: [],
    technoPlaylist: [],
    punkPlaylist: [],
    currentSelectedPlaylist: [],
    currentSelectedPlaylistId: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(spotifyPlaylistRock.fulfilled, (state, action) => {
      state.rockPlaylist = action.payload.playlists.items;
    });
    builder.addCase(spotifyPlaylistHipHop.fulfilled, (state, action) => {
      state.hipHopPlaylist = action.payload.playlists.items;
    });
    builder.addCase(spotifyPlaylistMetal.fulfilled, (state, action) => {
      state.metalPlaylist = action.payload.playlists.items;
    });
    builder.addCase(spotifyPlaylistParty.fulfilled, (state, action) => {
      state.partyPlaylist = action.payload.playlists.items;
    });
    builder.addCase(spotifyPlaylistTechno.fulfilled, (state, action) => {
      state.technoPlaylist = action.payload.playlists.items;
    });
    builder.addCase(spotifyPlaylistPunk.fulfilled, (state, action) => {
      state.punkPlaylist = action.payload.playlists.items;
    });
    builder.addCase(
      spotifyPlaylistByIdTracks.fulfilled,
      (state, action) => {
        state.currentSelectedPlaylist = action.payload.response.items;
        state.currentSelectedPlaylistId = action.payload.id;
      }
    );
    builder.addCase(spotifyPlaylistFeatured.fulfilled, (state, action) => {
      console.log(action.payload, "ACTION_PAY_Featured");
      state.featuredPlaylist = action.payload.playlists.items;
    });
  },
});
export default playlistSlice.reducer;
