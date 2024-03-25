import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HeaderComponent } from "../components/HeaderComponent";
import { getCurrentDateTimeHours } from "../utils/Functions";
import "../css/landing-page-header.css";
import { TopBarComponent } from "../components/TopBarComponent";
import { spotifyPlaylistRock } from "../redux/playlistSlice";
import { customDispatchRequest } from "../utils/Functions";
import { spotifyPlaylistMetal } from "../redux/playlistSlice";
import { spotifyPlaylistHipHop } from "../redux/playlistSlice";
import { spotifyPlaylistCountry } from "../redux/playlistSlice";
import { spotifyPlaylistParty } from "../redux/playlistSlice";
import { spotifyPlaylistTechno } from "../redux/playlistSlice";
import { spotifyPlaylistPunk } from "../redux/playlistSlice";
import { spotifyPlaylistFeatured } from "../redux/playlistSlice";
export const LandingPage = ({
  token,
  setIsAfternoon,
  setIsMorning,
  isAfternoon,
  isMorning,
  isNightTime,
  isEvening,
  setIsNightTime,
  setIsEvening,
}) => {
  const playlistData = useSelector(
    (state) => state.users.spotifyTopPlaylistData
  );
  const rockPlaylist = useSelector((state) => state.playlist.rockPlaylist);
  const hipHopPlaylist = useSelector(
    (state) => state.playlist.hipHopPlaylist
  );
  const metalPlaylist = useSelector(
    (state) => state.playlist.metalPlaylist
  );
  const technoPlaylist = useSelector(
    (state) => state.playlist.technoPlaylist
  );
  const punkPlaylist = useSelector((state) => state.playlist.punkPlaylist);
  const partyPlaylist = useSelector(
    (state) => state.playlist.partyPlaylist
  );
  const featuredPlaylist = useSelector(
    (state) => state.playlist.featuredPlaylist
  );
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(
      getCurrentDateTimeHours(
        setIsAfternoon,
        setIsMorning,
        setIsEvening,
        setIsNightTime
      ),
      "LANDINGPAGE_DATETIME"
    );
  }, []);
  useEffect(() => {
    if (token && token.length) {
      customDispatchRequest(token, dispatch, spotifyPlaylistRock);
      customDispatchRequest(token, dispatch, spotifyPlaylistMetal);
      customDispatchRequest(token, dispatch, spotifyPlaylistHipHop);
      customDispatchRequest(token, dispatch, spotifyPlaylistCountry);
      customDispatchRequest(token, dispatch, spotifyPlaylistParty);
      customDispatchRequest(token, dispatch, spotifyPlaylistTechno);
      customDispatchRequest(token, dispatch, spotifyPlaylistPunk);
      customDispatchRequest(token, dispatch, spotifyPlaylistFeatured);
    }
  }, []);

  /**
   * TODO
   * create section for every grid that gets data for API calls for a seperate genre of music go for 15 different genres with A row of 4 and increase with screen size
   * TODO
   * Try and make all the genre api calls in one call check doc for details "https://api.spotify.com/v1/browse/categories/ROCK/playlists " this will be used to fill my landing page with data
   *TODO
   Create functional dispatches that based of time of day what kind of playlist to req and display EX: MORNING=playlist and genres that are easy listening or moring like playlist to get day started.
   *TODO
   EXTENED AFTERNOON time could be upeat/lunchtime music or work music EVENENING = party like music 5am/12= morning 12pm/7pm/1900hrs evening 1900HR/0500HRS NIGHT TIME
   */
  return (
    <div className="main-screen-content">
      <TopBarComponent />
      <div className="landing-page-main-container">
        <main className="landing-page-main">
          <div className="landing-page-header-container">
            <HeaderComponent
              isAfternoon={isAfternoon}
              isMorning={isMorning}
              isNightTime={isNightTime}
              isEvening={isEvening}
              playlistData={playlistData}
              rockPlaylist={rockPlaylist}
              hipHopPlaylist={hipHopPlaylist}
              metalPlaylist={metalPlaylist}
              partyPlaylist={partyPlaylist}
              technoPlaylist={technoPlaylist}
              punkPlaylist={punkPlaylist}
              token={token}
              featuredPlaylist={featuredPlaylist}
            />
          </div>
        </main>
      </div>
    </div>
  );
};
