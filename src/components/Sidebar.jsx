import React, { useState, useEffect, useRef } from "react";
import "../css/sidebar.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import { SideBarData } from "./SideBarData";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

export const Sidebar = ({ token }) => {
  const [minWidth, maxWidth, defaultWidth] = [55, 300, 56];
  const [sidebarWidth, setSidebarWidth] = useState(defaultWidth);
  const isResized = useRef(false);
  const nav = useNavigate();
  const playlistData = useSelector(
    (state) => state.users.spotifyTopPlaylistData
  );

  /***
   * TODO
   * if current URL is / or Home Make Home BTN unlclickable.
   * TODO
   * if current URL is /search make search BTN unclickable.
   * TODO
   * if sidebar width get to certain length "shortside" make "Home" and "Search" display:none,
   *TODO
   *Figure out how to style and thin out scrollbar for playlistData.
   */
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      if (!isResized.current) {
        return;
      }
      setSidebarWidth((previousWidth) => {
        const newWidth = previousWidth + e.movementX / 2;

        const isWidthInRange =
          newWidth >= minWidth && newWidth <= maxWidth;

        return isWidthInRange ? newWidth : previousWidth;
      });
    });
    window.addEventListener("mouseup", () => {
      isResized.current = false;
    });
  }, []);
  return (
    <div className="sidbar-container">
      <div className="sidebar-upper">
        <nav className="sidebar-main">
          <div className="sidebar-search-and-home">
            <ul>
              <li>
                <a>
                  <span
                    className="sidebar-home-tag"
                    onClick={() => {
                      nav("/search");
                    }}
                  >
                    <SearchIcon fontSize="large" />
                    <p
                      className={
                        sidebarWidth < 150 && sidebarWidth > minWidth
                          ? "hide-current"
                          : "sidebar-home-tag"
                      }
                    >
                      Search
                    </p>
                  </span>
                </a>
              </li>
              <li>
                <a>
                  <span
                    onClick={() => {
                      nav("/");
                    }}
                    className="sidebar-home-tag"
                  >
                    <HomeIcon fontSize="large" />
                    <p
                      className={
                        sidebarWidth < 150 && sidebarWidth > minWidth
                          ? "hide-current"
                          : "sidebar-home-tag"
                      }
                    >
                      Home
                    </p>
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="sidebar-data-container">
            <SideBarData
              isResized={isResized}
              playlistData={playlistData}
              token={token}
              sidebarWidth={sidebarWidth}
              setSidebarWidth={setSidebarWidth}
              minWidth={minWidth}
            />
          </div>
        </nav>
        <div
          style={{ width: `${sidebarWidth / 16}rem` }}
          className="sidebar"
        ></div>{" "}
      </div>
      <div
        className="cursor-pointer-border"
        onMouseDown={() => {
          isResized.current = true;
        }}
      ></div>
    </div>
  );
};
