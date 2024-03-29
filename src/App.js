import { useEffect, useState } from "react";
import "./App.css";
import Login from "./pages/Login/Login";
import { getTokenFromUrl } from "./Spotify/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./pages/Player/Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [_token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValue();
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const hashToken = hash.access_token;
    if (hashToken) {
      dispatch({
        type: "SET_TOKEN",
        token: hashToken,
      });
      setToken(hashToken);
      spotify.setAccessToken(hashToken);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });
      spotify.getPlaylist("3MXcUFjih0EuTtz6n2I1Mw").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );
    }
  }, []);

  return (
    <div className="app">
      {_token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
