import React from "react";
import SpotifyPlayers from "react-spotify-web-playback";

export const SpotifyPlayer = () => {
  return (
    <div className="player">
      <div className="inner-player">
        <SpotifyPlayers
          styles={{
            activeColor: "#fff",
            bgColor: "#333",
            color: "#fff",
            loaderColor: "#fff",
            sliderColor: "#1cb954",
            trackArtistColor: "#ccc",
            trackNameColor: "#fff",
          }}
        />{" "}
      </div>
    </div>
  );
};
