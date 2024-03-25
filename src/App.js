import "./App.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { spotifyClientInfo } from "./redux/userSlice";
import { spotifyPlaylistInfo } from "./redux/userSlice";
import { Sidebar } from "./components/Sidebar";
import { SpotifyPlayer } from "./components/SpotifyPlayer";
import { LandingPage } from "./pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import { Search } from "./pages/Search";
import { CreatePlayListPage } from "./pages/CreatePlayListPage";
import { useEffect } from "react";
import { getAccessToken } from "./utils/Functions";
import { customDispatchRequest } from "./utils/Functions";
import { getSpotifyTokenAfterTimeExpires } from "./utils/Functions";
import { TopBarComponent } from "./components/TopBarComponent";
export const App = () => {
  const dispatch = useDispatch();
  const [token, setToken] = useState(
    localStorage.getItem("spotify_access_token")
  );
  const [headerData, setHeaderData] = useState([]);
  const [isAfternoon, setIsAfternoon] = useState(false);
  const [isMorning, setIsMorning] = useState(false);
  const [isEvening, setIsEvening] = useState(false);
  const [isNightTime, setIsNightTime] = useState(false);
  useEffect(() => {
    let data = localStorage.getItem("spotify_access_token");
    customDispatchRequest(
      data,
      dispatch,
      spotifyClientInfo,
      setHeaderData
    );
    customDispatchRequest(data, dispatch, spotifyPlaylistInfo);
  }, []);
  useEffect(() => {
    getAccessToken();
    setToken(localStorage.getItem("spotify_access_token"));
    // if (!localStorage.getItem("spotify_access_token")) {
    //   window.location.pathname = "/sign-in";
    // }
  }, [dispatch]);
  useEffect(() => {
    getSpotifyTokenAfterTimeExpires(36000000);
  }, []);
  return (
    <>
      {" "}
      <div className="App">
        <div className="main-app-grid">
          <Router>
            <Sidebar token={token} />
            <Routes>
              <Route
                element={
                  <LandingPage
                    isMorning={isMorning}
                    setIsMorning={setIsMorning}
                    isEvening={isEvening}
                    setIsEvening={setIsEvening}
                    isNightTime={isNightTime}
                    setIsNightTime={setIsNightTime}
                    isAfternoon={isAfternoon}
                    setIsAfternoon={setIsAfternoon}
                    TopBarComponent={<TopBarComponent />}
                    token={token}
                  />
                }
                path="/"
              ></Route>
              <Route
                path="/search"
                element={<Search TopBarComponent={TopBarComponent} />}
              ></Route>
              <Route
                element={<CreatePlayListPage />}
                path="/create-playlist"
              ></Route>
              <Route
                element={<SignIn />}
                path="/sign-in"
              ></Route>
            </Routes>
          </Router>
          <SpotifyPlayer />
        </div>
      </div>
    </>
  );
};
export default App;
