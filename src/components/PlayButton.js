import React, { useEffect } from "react";
import "../css/button.css";
import { useDispatch, useSelector } from "react-redux";
import { spotifyPlaylistByIdTracks } from "../redux/playlistSlice";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
export const PlayButton = ({ data, token }) => {
  const dispatch = useDispatch();
  const currentPlaylistID = useSelector(
    (state) => state.playlist.currentSelectedPlaylistId
  );
  const id = data.id;
  useEffect(() => {}, [currentPlaylistID]);
  return (
    <>
      {currentPlaylistID === id ? (
        <div
          className="play-button-container"
          onMouseUp={() => {
            const reqData = async () => {
              const reponse = await dispatch(
                spotifyPlaylistByIdTracks({
                  payload: { token, id },
                })
              );
            };
            reqData();
          }}
        >
          <span className="test3">
            <PauseCircleFilledIcon
              style={{ fontSize: 70 }}
              fontSize="large"
            />
          </span>
        </div>
      ) : (
        <div
          className="play-button-container"
          onMouseUp={() => {
            const reqData = async () => {
              const reponse = await dispatch(
                spotifyPlaylistByIdTracks({
                  payload: { token, id },
                })
              );
            };
            reqData();
          }}
        >
          <span className="test3">
            <PlayCircleFilledWhiteIcon
              style={{ fontSize: 70 }}
              fontSize="large"
            />
          </span>
        </div>
      )}
    </>
  );
};
{
  /* <div
      onMouseUp={() => {
        const reqData = async () => {
          const reponse = await dispatch(
            spotifyPlaylistByIdTracks({
              payload: { token, id },
            })
          );
        };
        reqData();
      }}
      on
      onClick={(e) => {
        if (currentPlaylistID === id) {
          e.target.classList.toggle(`active`);
        }
      }}
      onLoad={(e) => {
        e.target.classList.toggle(`active`);
      }}
      className="botón"
      //   onClick={`${this.classList.toggle("active")}`}
    >
      <div
        className="fondo"
        x="0"
        y="0"
        width="200"
        height="200"
      ></div>
      <div
        className="icono"
        width="200"
        height="200"
      >
        <div
          class="parte izquierda"
          x="0"
          y="0"
          width="200"
          height="200"
          fill="#fff"
        ></div>
        <div
          class="parte derecha"
          x="0"
          y="0"
          width="200"
          height="200"
          fill="#fff"
        ></div>
      </div>
      <div class="puntero"></div>
    </div> */
}
