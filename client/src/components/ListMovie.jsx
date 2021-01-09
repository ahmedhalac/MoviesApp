import React, { Fragment } from "react";
import { useState } from "react";
import { useEffect } from "react";
import EditMovie from "./EditMovie";

const ListMovie = () => {
  const [movies, setMovies] = useState([]);

  const deleteMovie = async (id) => {
    try {
      const deleteMovie = await fetch(
        `http://localhost:5000/api/movies/${id}`,
        {
          method: "DELETE",
        }
      );
      setMovies(movies.filter((movie) => movie.id !== id));
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:5000/api/movies");
      const data = await response.json();
      setMovies(data);
    }
    fetchData();
  }, []);
  return (
    <Fragment>
      <table className="table mt-5 ml-5 table-striped mx-auto w-75">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Movie name</th>
            <th scope="col">Genre</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.id}>
              <td>{movie.name}</td>
              <td>{movie.genre}</td>
              <td>
                <EditMovie movie={movie} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteMovie(movie.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListMovie;
