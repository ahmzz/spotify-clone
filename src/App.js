import { useEffect, useState } from "react";
import "./App.css";
import Login from "./pages/Login/Login";
import { getTokenFromUrl } from "./Spotify/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./pages/Player/Player";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const hashToken = hash.access_token;
    if (hashToken) {
      setToken(hashToken);
      spotify.setAccessToken(hashToken)

      spotify.getMe()
      .then(user=>console.log(user))
    }
  }, []);
  return <div className="app">{token ? <Player/> : <Login />}</div>;
}

export default App;
