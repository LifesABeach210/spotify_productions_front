import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const getSpotifyTopArtistShort = createAsyncThunk(
  "spotify/get/artists",
  async ({ payload }) => {
    let response = await fetch(
      `${process.env.REACT_APP_SPOTIFY_BASE_SEARCH_URL_TOP_ARTIST_SHORT}`,
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
export const getSpotifySingleArtistTopTracks = createAsyncThunk(
  "spotify/get/artistsById/Artists/top-tracks",
  async ({ payload }) => {
    let response = await fetch(
      `${process.env.REACT_APP_SPOTIFY_BASE_SEARCH_URL_ARTIST}/${payload.id}/top-tracks?market=US`,
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

export const getSpotifySingleArtistAlbum = createAsyncThunk(
  "spotify/get/albumById",
  async ({ payload }) => {
    let response = await fetch(
      `${process.env.REACT_APP_SPOTIFY_BASE_SEARCH_URL_ARTIST_ALBUM}/${payload.id}`,
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
export const getSpotifySingleArtistAlbums = createAsyncThunk(
  "spotify/get/artistsById/Artists/albums",
  async ({ payload }) => {
    let response = await fetch(
      `${process.env.REACT_APP_SPOTIFY_BASE_SEARCH_URL_ARTIST}/${payload.id}/albums`,
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
export const getSpotifySingleRelatedArtist = createAsyncThunk(
  "spotify/get/artistsById/relatedArtists",
  async ({ payload }) => {
    let response = await fetch(
      `${process.env.REACT_APP_SPOTIFY_BASE_SEARCH_URL_ARTIST}/${payload.id}/related-artists`,
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
export const getSpotifyTopArtistMedium = createAsyncThunk(
  "sportify/get/artists/M",
  async ({ payload }) => {
    let response = await fetch(
      `${process.env.REACT_APP_SPOTIFY_BASE_SEARCH_URL_TOP_ARTIST_MEDIUM}`,
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
export const getSpotifyTopArtistLong = createAsyncThunk(
  "sportify/get/artists/L",
  async ({ payload }) => {
    let response = await fetch(
      `${process.env.REACT_APP_SPOTIFY_BASE_SEARCH_URL_TOP_ARTIST_LONG}`,
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
export const getSpotifySingleArtist = createAsyncThunk(
  "spotify/get/artistsById",
  async ({ payload }) => {
    let response = await fetch(
      `${process.env.REACT_APP_SPOTIFY_BASE_SEARCH_URL_ARTIST}/${payload.id}`,
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
export const artistSlice = createSlice({
  name: "artists",
  initialState: {
    artistsData: [],
    spotifySingleArtistAlbumTracks: [],
    spotifySingleArtistAlbumData: [],
    spotifySingleArtistSpecificAlbumsData: [],
    spotifySingleRelatedArtistData: [],
    spotifySingleArtistTracksData: [],
    spotifySingleArtistData: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getSpotifyTopArtistShort.fulfilled,
      (state, action) => {
        console.log(state, "BUILDER_STATE");
        console.log(action.payload, "BUILDER_ACTION");
        let data = action.payload.items;
        console.log(data, "TRACKS");

        state.spotifyTopArtistData = data;
      }
    );
    builder.addCase(
      getSpotifyTopArtistMedium.fulfilled,
      (state, action) => {
        console.log(state, "BUILDER_STATE");
        console.log(action.payload, "BUILDER_ACTION");
        let data = action.payload.items;
        console.log(data, "TRACKS");

        state.spotifyTopArtistData = data;
      }
    );
    builder.addCase(getSpotifyTopArtistLong.fulfilled, (state, action) => {
      console.log(state, "BUILDER_STATE");
      console.log(action.payload, "BUILDER_ACTION");
      let data = action.payload.items;
      console.log(data, "TRACKS");

      state.spotifyTopArtistData = data;
    });
    builder.addCase(getSpotifySingleArtist.fulfilled, (state, action) => {
      console.log(state, "BUILDER_STATE");
      console.log(action, "BUILDER_ACTION");
      state.spotifySingleArtistData = action.payload;
    });
    builder.addCase(
      getSpotifySingleArtistTopTracks.fulfilled,
      (state, action) => {
        console.log(state, "BUILDER_STATE");
        console.log(action, "BUILDER_ACTION");
        state.spotifySingleArtistTracksData = action.payload.tracks;
      }
    );
    builder.addCase(
      getSpotifySingleRelatedArtist.fulfilled,
      (state, action) => {
        console.log(state, "BUILDER_STATE");
        console.log(action, "BUILDER_ACTION");
        state.spotifySingleRelatedArtistData = action.payload.artists;
      }
    );
    builder.addCase(
      getSpotifySingleArtistAlbums.fulfilled,
      (state, action) => {
        console.log(state, "BUILDER_STATE");
        console.log(action, "BUILDER_ACTION");
        state.spotifySingleArtistSpecificAlbumsData = action.payload.items;
      }
    );
    builder.addCase(
      getSpotifySingleArtistAlbum.fulfilled,
      (state, action) => {
        console.log(state, "BUILDER_STATE");
        console.log(action, "BUILDER_ACTION");
        state.spotifySingleArtistAlbumData = action.payload;
        state.spotifySingleArtistAlbumTracks = action.payload.tracks.items;
      }
    );
  },
});
export default artistSlice.reducer;
