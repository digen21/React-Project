import React from "react";
import "./style.css";

function Header() {
  return (
    <header>
      <img
        src="https://freepngimg.com/thumb/internet_meme/3-2-troll-face-meme-png.png"
        alt=""
        className="--header-img"
      />
      <h2 className="--header-title">Header component</h2>
      <h4 className="--project-title">React Project - 1</h4>
    </header>
  );
}

export default Header;
