import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Voice from "./util/Util";
import Modulator from "./util/Modulator";

const App = () => {
  const handleClick = () => {
    const soundFileName = Voice.Util.loadSound("../public/sample.mp3");
    if (!soundFileName) {
      console.warn("Sound File not selected.");
      return;
    }
    // 音声ファイル内容をモジュレータとして読み込む
    // Modulator.LoadSoundFile(soundFileName);
  };
  return (
    <div className="App">
      <p className="loadSound" onClick={handleClick}>
        Click
      </p>
    </div>
  );
};

export default App;
