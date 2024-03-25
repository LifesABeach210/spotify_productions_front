import React from "react";
import { HeaderGrid } from "./HeaderGrid";
import { LandingPagePlaylistData } from "./LandingPagePlaylistData";
import "../css/header-grid.css";
export const HeaderComponent = ({
  playlistData,
  isAfternoon,
  isMorning,
  isNightTime,
  isEvening,
  rockPlaylist,
  featuredPlaylist,
  hipHopPlaylist,
  metalPlaylist,
  partyPlaylist,
  technoPlaylist,
  punkPlaylist,
  token,
}) => {
  /**
   * TODO
   * Ask/Figure out how to create custom Col Count for grid items when it changes base on screen width/size
   * TODO
   * Create Helper Function that sets greeting based off of time of day ?Good Morning || Good Evening
   * TODO
   * set background to linear gradent for a smooth looking Header
   * TODO
   * create grid of 8 of my personal playlist on header
   */
  return (
    <>
      <section>
        <div className="header-component-flex-items">
          <div>
            <span>All</span>
          </div>
          <div>
            <span>Music</span>
          </div>
          <div>
            <span>Podcast</span>
          </div>
        </div>
        <div className="landing-page-greeting">
          {" "}
          {isMorning === true ? <h2>Good Morning</h2> : <span></span>}
          {isAfternoon === true ? <h2>Good Afternoon</h2> : <span></span>}
          {isEvening === true ? <h2>Good Evening</h2> : <span></span>}
          {isNightTime === true ? <h2>Good Night</h2> : <span></span>}
        </div>
      </section>
      <HeaderGrid playlistData={playlistData} />\
      <section className="landing-page-playlist-data-main-container">
        <LandingPagePlaylistData
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
      </section>
    </>
  );
};
