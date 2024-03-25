import React, { useEffect } from "react";
import "../css/header-grid.css";
import { PlayButton } from "./PlayButton";
import { customDispatchRequest } from "../utils/Functions";
import { useDispatch } from "react-redux";

export const LandingPagePlaylistData = ({
  hipHopPlaylist,
  metalPlaylist,
  partyPlaylist,
  technoPlaylist,
  punkPlaylist,
  featuredPlaylist,
  token,
}) => {
  const dispatch = useDispatch();
  useEffect(() => {}, [
    hipHopPlaylist,
    metalPlaylist,
    partyPlaylist,
    technoPlaylist,
    punkPlaylist,
  ]);
  return (
    <>
      <section className="landing-page-grid-items-section">
        <h2>Featured</h2>
        <div>
          <div className="landing-page-grid-items">
            {featuredPlaylist && featuredPlaylist.length > 1 ? (
              featuredPlaylist.slice(0, 8).map((_, i) => {
                const data = featuredPlaylist[i];

                return (
                  <div
                    /***
                     * TODO light and dark mode switch from default to provided color of api
                     */
                    style={
                      i % 2 === 0
                        ? { backgroundColor: "#F49B23" }
                        : { backgroundColor: "#FFFFFF" }
                    }
                    className="landing-page-grid-map"
                  >
                    <div className="landing-page-grid-map-item">
                      <div className="landing-page-grid-map-img">
                        <img
                          alt="temp"
                          src={
                            _.images && _.images[0].url
                              ? _.images[0].url
                              : "./public/playlistDefault.jpg"
                          }
                        />
                        <div className="test2">
                          <PlayButton
                            data={data}
                            token={token}
                          />
                        </div>

                        <div className="landing-page-grid-inner-container-items">
                          {" "}
                          <p>{_.name}</p>
                          <p>
                            {_.description.includes("<") === true
                              ? " "
                              : _.description.split(".")[0]}
                          </p>
                          <div style={{ display: "flex" }}>
                            <p>Owner:</p>
                            <p>{_.owner.display_name}</p>
                          </div>
                          <p>Total Tracks:{_.tracks.total}</p>
                          <p>Type:{_.type}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <span></span>
            )}
          </div>
        </div>
      </section>
      <section className="landing-page-grid-items-section">
        <h2>Hip-Hop</h2>
        <div className="landing-page-grid-items">
          {hipHopPlaylist && hipHopPlaylist.length > 1 ? (
            hipHopPlaylist.slice(0, 8).map((_, i) => {
              const data = hipHopPlaylist[i];
              const id = data.id;
              return (
                <div
                  /***
                   * TODO light and dark mode switch from default to provided color of api
                   */
                  style={
                    i % 2 === 0
                      ? { backgroundColor: "#F49B23" }
                      : { backgroundColor: "#FFFFFF" }
                  }
                  className="landing-page-grid-map"
                >
                  <div className="landing-page-grid-map-item">
                    <div className="landing-page-grid-map-img">
                      <img
                        alt="temp"
                        src={
                          _.images && _.images[0].url
                            ? _.images[0].url
                            : "./public/playlistDefault.jpg"
                        }
                      />
                      <div className="test2">
                        <PlayButton
                          data={data}
                          token={token}
                        />
                      </div>

                      <div className="landing-page-grid-inner-container-items">
                        {" "}
                        <p>{_.name}</p>
                        <p>
                          {_.description.includes("<") === true
                            ? " "
                            : _.description.split(".")[0]}
                        </p>
                        <div style={{ display: "flex" }}>
                          <p>Owner:</p>
                          <p>{_.owner.display_name}</p>
                        </div>
                        <p>Total Tracks:{_.tracks.total}</p>
                        <p>Type:{_.type}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <span></span>
          )}
        </div>
      </section>
      <section className="landing-page-grid-items-section">
        {" "}
        <h2>Metal</h2>
        <div className="landing-page-grid-items">
          {metalPlaylist && metalPlaylist.length ? (
            metalPlaylist.slice(0, 8).map((_, i) => {
              const data = metalPlaylist[i];

              return (
                <div
                  /***
                   * TODO light and dark mode switch from default to provided color of api
                   */
                  style={
                    i % 2 === 0
                      ? { backgroundColor: "#F49B23" }
                      : { backgroundColor: "#FFFFFF" }
                  }
                  className="landing-page-grid-map"
                >
                  <div className="landing-page-grid-map-item">
                    <div className="landing-page-grid-map-img">
                      <img
                        alt="temp"
                        src={
                          _.images && _.images[0].url
                            ? _.images[0].url
                            : "./public/playlistDefault.jpg"
                        }
                      />
                      <div className="test2">
                        {" "}
                        <PlayButton
                          token={token}
                          data={data}
                        />
                      </div>
                      <div className="landing-page-grid-inner-container-items">
                        {" "}
                        <p>{_.name}</p>
                        <p>
                          {_.description.includes("<") === true
                            ? " "
                            : _.description.split(".")[0]}
                        </p>
                        <div style={{ display: "flex" }}>
                          <p>Owner:</p>
                          <p>{_.owner.display_name}</p>
                        </div>
                        <p>Total Tracks:{_.tracks.total}</p>
                        <p>Type:{_.type}</p>
                        <p>Play button Componenet</p>
                        <p>when active rotates ? maybe</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <span></span>
          )}
        </div>
      </section>
      <section className="landing-page-grid-items-section">
        {" "}
        <h2>Party</h2>
        <div className="landing-page-grid-items">
          {partyPlaylist && partyPlaylist.length ? (
            partyPlaylist.slice(0, 8).map((_, i) => {
              const data = partyPlaylist[i];
              return (
                <div
                  /***
                   * TODO light and dark mode switch from default to provided color of api
                   */
                  style={
                    i % 2 === 0
                      ? { backgroundColor: "#F49B23" }
                      : { backgroundColor: "#FFFFFF" }
                  }
                  className="landing-page-grid-map"
                >
                  <div className="landing-page-grid-map-item">
                    <div className="landing-page-grid-map-img">
                      <img
                        alt="temp"
                        src={
                          _.images && _.images[0].url
                            ? _.images[0].url
                            : "./public/playlistDefault.jpg"
                        }
                      />
                      <div className="test2">
                        {" "}
                        <PlayButton
                          token={token}
                          data={data}
                        />
                      </div>
                      <div className="landing-page-grid-inner-container-items">
                        {" "}
                        <p>{_.name}</p>
                        <p>
                          {_.description.includes("<") === true
                            ? " "
                            : _.description.split(".")[0]}
                        </p>
                        <div style={{ display: "flex" }}>
                          <p>Owner:</p>
                          <p>{_.owner.display_name}</p>
                        </div>
                        <p>Total Tracks:{_.tracks.total}</p>
                        <p>Type:{_.type}</p>
                        <p>Play button Componenet</p>
                        <p>when active rotates ? maybe</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <span></span>
          )}
        </div>
      </section>
      <section className="landing-page-grid-items-section">
        {" "}
        <h2>Techno</h2>
        <div className="landing-page-grid-items">
          {technoPlaylist && technoPlaylist.length ? (
            technoPlaylist.slice(0, 8).map((_, i) => {
              const data = technoPlaylist[i];
              return (
                <div
                  /***
                   * TODO light and dark mode switch from default to provided color of api
                   */
                  style={
                    i % 2 === 0
                      ? { backgroundColor: "#F49B23" }
                      : { backgroundColor: "#FFFFFF" }
                  }
                  className="landing-page-grid-map"
                >
                  <div className="landing-page-grid-map-item">
                    <div className="landing-page-grid-map-img">
                      <img
                        alt="temp"
                        src={
                          _.images && _.images[0].url
                            ? _.images[0].url
                            : "./public/playlistDefault.jpg"
                        }
                      />
                      <div className="test2">
                        {" "}
                        <PlayButton
                          token={token}
                          data={data}
                        />
                      </div>
                      <div className="landing-page-grid-inner-container-items">
                        {" "}
                        <p>
                          {_.description.includes("<") === true
                            ? " "
                            : _.description.split(".")[0]}
                        </p>
                        <div style={{ display: "flex" }}>
                          <p>Owner:</p>
                          <p>{_.owner.display_name}</p>
                        </div>
                        <p>Total Tracks:{_.tracks.total}</p>
                        <p>Type:{_.type}</p>
                        <p>Play button Componenet</p>
                        <p>when active rotates ? maybe</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <span></span>
          )}
        </div>
      </section>
      <section className="landing-page-grid-items-section">
        {" "}
        <h2>Punk</h2>
        <div className="landing-page-grid-items">
          {punkPlaylist && punkPlaylist.length ? (
            punkPlaylist.slice(0, 8).map((_, i) => {
              const data = punkPlaylist[i];
              return (
                <div
                  /***
                   * TODO light and dark mode switch from default to provided color of api
                   */
                  style={
                    i % 2 === 0
                      ? { backgroundColor: "#F49B23" }
                      : { backgroundColor: "#FFFFFF" }
                  }
                  className="landing-page-grid-map"
                >
                  <div className="landing-page-grid-map-item">
                    <div className="landing-page-grid-map-img">
                      <img
                        alt="temp"
                        src={
                          _.images && _.images[0].url
                            ? _.images[0].url
                            : "./public/playlistDefault.jpg"
                        }
                      />
                      <div
                        onClick={() => {}}
                        className="test2"
                      >
                        {" "}
                        <PlayButton
                          token={token}
                          data={data}
                        />
                      </div>
                      <div className="landing-page-grid-inner-container-items">
                        {" "}
                        <p>{_.name}</p>
                        {/* <p>{_.description.split(".")[0]}</p> */}
                        <p>
                          {_.description.includes("<") === true
                            ? " "
                            : _.description.split(".")[0]}
                        </p>
                        <div style={{ display: "flex" }}>
                          <p>Owner:</p>
                          <p>{_.owner.display_name}</p>
                        </div>
                        <p>Total Tracks:{_.tracks.total}</p>
                        <p>Type:{_.type}</p>
                        <p>Play button Componenet</p>
                        <p>when active rotates ? maybe</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <span></span>
          )}
        </div>
      </section>
    </>
  );
};
