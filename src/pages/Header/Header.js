import React from "react";
import "./Header.css";
import { Search } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { useDataLayerValue } from "../../DataLayer";
const Header = () => {
  const [{ user }, dispatch] = useDataLayerValue();
  return (
    <div className="header">
      <div className="header__left">
        <Search />
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
};

export default Header;
