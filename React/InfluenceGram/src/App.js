import React from "react";
import "./Resources/CSS/App.css";
import Insta from "./Resources/Icons/Insta.png";

import { Header } from "./Components/Layouts";

function App() {
  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>
      <div className="content">Feeds</div>
      <div className="footer">Footer</div>

      <div className="brandName">
        <img src={Insta} alt="Logo" />
        <p className="words">InfluenceGram</p>
      </div>
    </div>
  );
}

export default App;
