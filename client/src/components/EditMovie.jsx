import React, { Fragment, useState } from "react";

const EditMovie = ({ movie }) => {
  const [name, setName] = useState(movie.name);
  const [genre, setGenre] = useState(movie.genre);

  const updateMovie = async (e) => {
    console.log("Ok");
    e.preventDefault();
    try {
      const body = { name, genre };
      const response = await fetch(
        `http://localhost:5000/api/movies/${movie.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      window.location = "/";
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${movie.id}`}
      >
        Edit
      </button>

      <div className="modal" id={`id${movie.id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit movie</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                type="text"
                className="form-control mt-3"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={(e) => updateMovie(e)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditMovie;
