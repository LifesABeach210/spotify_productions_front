import React from "react";
import "../css/sidebar-playlist-data.css";
export const SidebarPlaylistData = ({ playlistData, isResized }) => {
  /**
   * TODO
   * Add owner of playlist under playlist_name with opacity of .5
   * TODO
   * change classname of test to anything else WTF.
   */
  return (
    <div className="sidebar-playlist-data-container">
      <div>
        {playlistData && playlistData.length ? (
          <div className="test">
            {playlistData.map((_, i) => {
              return (
                <>
                  <div
                    className="sidebar-data-map"
                    key={i}
                  >
                    <img
                      alt="img"
                      height={48}
                      width={48}
                      src={
                        _.images && _.images.length
                          ? _.images[0].url
                          : "./playlistDefault.jpg"
                      }
                    />
                    {isResized.current === false ? (
                      <span className="sidebar-data-map-name">
                        <p>
                          {_.name && _.name.length
                            ? _.name
                            : "Dans Playlist"}
                        </p>
                      </span>
                    ) : (
                      <span></span>
                    )}
                  </div>
                </>
              );
            })}
          </div>
        ) : (
          <span></span>
        )}
      </div>
    </div>
  );
};
