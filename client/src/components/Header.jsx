import React, { Fragment } from "react";
import InputMovies from "./InputMovies";

const Header = () => {
  return (
    <Fragment>
      {" "}
      <nav className="navbar navbar-light bg-dark">
        <h1 className="text-light mx-auto">Movies</h1>
      </nav>
      <InputMovies />
    </Fragment>
  );
};

export default Header;
