import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NewsList from "./components/NewsList";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Publicis Sapient - XT hiring challenge!!</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload. Refactor at will, but
          please do not modify the entry point <code>index.js</code>.
        </p>
      </header> */}
      <Header />
      <NewsList />
    </div>
  );
}

export default App;
