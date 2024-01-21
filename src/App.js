import { useEffect, useState } from "react";
import "./App.css";
import Login from "./pages/Login/Login";
import { getTokenFromUrl } from "./Spotify/spotify";

function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const hashToken = hash.access_token;
    if (hashToken) setToken(hashToken);
  }, []);
  return <div className="app">{token ? <h1>Logged in</h1> : <Login />}</div>;
}

export default App;
