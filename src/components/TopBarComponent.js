import React from "react";
import "../css/top-bar.css";
import SearchIcon from "@mui/icons-material/Search";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import GetAppIcon from "@mui/icons-material/GetApp";
export const TopBarComponent = () => {
  return (
    <div className="search-page-container">
      <header className="search-page-header">
        {" "}
        <div className="chevron-right-and-left">
          <span
            onClick={() => {
              /**
               * TODO Find a way to save pref href/page visits both forward and back word to easely cicle through prev visted pages of app
               *TODO Find a way to calc(var(100vw-sidebarWidth for the margin width of top bar so elements on far side are spaced correctly))
               */
            }}
          >
            <ChevronLeftIcon />
          </span>
          <span
            onClick={() => {
              /**
               * TODO Find a way to save pref href/page visits both forward and back word to easely cicle through prev visted pages of app
               *
               */
            }}
          >
            <ChevronRightIcon />
          </span>
          <div className="search-input-field">
            <SearchIcon />
            <input
              onKeyDown={() => {
                /**
                 * TODO spotifys web site querys every new key that is pressed into input and display the results Emplement!!
                 */
              }}
              className="search-input"
            />
          </div>{" "}
        </div>
        <div className="right-topbar-container">
          <div className="install-app-icon">
            <GetAppIcon />
            <p>Install App</p>
          </div>

          <span>
            <NotificationsOutlinedIcon />
          </span>
        </div>
      </header>
    </div>
  );
};
