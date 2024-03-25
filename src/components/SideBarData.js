import React from "react";
import { SidebarPlaylistData } from "./SidebarPlaylistData";
import { useNavigate } from "react-router-dom";
import DensitySmallIcon from "@mui/icons-material/DensitySmall";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
export const SideBarData = ({
  sidebarWidth,
  minWidth,
  setSidebarWidth,
  token,
  playlistData,
  isResized,
}) => {
  const nav = useNavigate();
  return (
    <>
      <div className="sidebar-data-header">
        <div className="sidebar-data-header-top">
          <span className="sidebar-data-header-top-row">
            <span
              onClick={() => {
                if (sidebarWidth > 55 && sidebarWidth < 60) {
                  setSidebarWidth(300);
                  return;
                }
                setSidebarWidth(56);
              }}
              className="sidebar-data-header-top-row"
            >
              <DensitySmallIcon fontSize="large" />

              <div
                onClick={() => {
                  if (sidebarWidth === 55) {
                    setSidebarWidth(300);
                  }
                  setSidebarWidth(56);
                }}
                className={
                  sidebarWidth < 150 && sidebarWidth > minWidth
                    ? "hide-current"
                    : ""
                }
              >
                {" "}
                <p>Your Library</p>
              </div>
            </span>
          </span>
          <div>
            <span
              onClick={() => {
                nav("/create-playlist");
              }}
              className={
                sidebarWidth < 150 && sidebarWidth > minWidth
                  ? "hide-current"
                  : "sidebar-data-header-top-row"
              }
            >
              <PlaylistAddIcon />
            </span>
          </div>
        </div>
      </div>
      <SidebarPlaylistData
        isResized={isResized}
        playlistData={playlistData}
      />
    </>
  );
};
