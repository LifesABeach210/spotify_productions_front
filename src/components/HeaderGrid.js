import React, { useEffect } from "react";

export const HeaderGrid = ({ playlistData }) => {
  return (
    <div className="header-grid-container-flex">
      <div className="header-grid-container-grid">
        {playlistData && playlistData.length > 1 ? (
          playlistData.slice(0, 8).map((_, i) => {
            return (
              <div className="header-grid">
                <div className="header-grid-image-container">
                  <img
                    className="grid-image-sm"
                    alt={`grid-header-${i}`}
                    src={
                      _.images && _.images.length
                        ? _.images[0].url
                        : "./playlistDefault.jpg"
                    }
                  />

                  <div className="header-grid-h5-container">
                    <p>{_.name}</p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <span>false</span>
        )}
      </div>
    </div>
  );
};
