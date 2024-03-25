import React from "react";
import { searchPageGridObj } from "../utils/search-page-grid-obj";
import "../css/search-page.css";
export const SearchPageGrid = () => {
  return (
    <>
      <h2 style={{ color: "white" }}>Browse All</h2>

      <div className="grid-item-container">
        {searchPageGridObj.map((_, i) => {
          return (
            <a
              key={`grid-item-key-${i}`}
              href="/"
              className="grid-item-start"
              style={{ backgroundColor: `${_.color}` }}
            >
              <div
                onClick={() => {
                  /**
                   * TODO send dispatch to redux to search for playlist of genreGroup and log response to check for errors.
                   * TODO download unique photo from spotify to imput diff photo in all grid items.
                   * TODO if genreGroup is unplayable/ unsupported but still get data greate boolean obj isPlayable:true/false
                   * TODO ^^continued if data can still be requested and presented but not supported by spotifyPlayer package present data but make inactive to send to package.
                   *
                   */
                }}
              >
                <img
                  className="grid-item-middle"
                  alt="img"
                  src={`${_.imgRoute}`}
                />
                <span>
                  <h3>{_.genreGroup}</h3>
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </>
  );
};
