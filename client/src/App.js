import React, { Fragment } from "react";
import "./App.css";
//import InputMovies from "./components/InputMovies";
import ListMovie from "./components/ListMovie";
import Header from "./components/Header";

function App() {
  return (
    <Fragment>
      <Header />
      <ListMovie />
    </Fragment>
  );
}

export default App;
