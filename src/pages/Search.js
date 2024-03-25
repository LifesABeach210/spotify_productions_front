import React from "react";
import "../css/search-page.css";
import { SearchPageGrid } from "../components/SearchPageGrid";

export const Search = ({ TopBarComponent }) => {
  return (
    /**
     * TODO create obj to map for custom grid containers that when clicked runs to a custom playlist and sends dispatch.
     * TODO ^^InProgress
    
    */
    <div className="main-screen-content">
      <TopBarComponent />
      <div className="search-page-grid-container">
        <section className="search-page-flex-section">
          <SearchPageGrid />
        </section>
      </div>
    </div>
  );
};
