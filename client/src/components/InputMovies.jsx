import React, { Fragment, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

const InputMovie = () => {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");

  const onSubmitForm = async (e) => {
    try {
      //e.preventDefault();
      const body = { name, genre };
      console.log("BODY", body);
      const response = await fetch("http://localhost:5000/api/movies", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };
  const mystyle = {
    border: "1px solid lightgray",
    padding: "6px",
    borderRadius: "4px",
    width: "50%",
  };
  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-secondary mt-5 ml-5"
        data-toggle="modal"
        data-target="#myModal"
      >
        + Add Movie
      </button>

      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add Movie</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div className="modal-body">
              <form className="form-group ml-3" onSubmit={onSubmitForm}>
                <label>Movie</label>
                <input
                  type="text"
                  placeholder="Input movie name"
                  className="w-50 form-control"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                />
                <label className="mt-3"> Genre</label>
                <div>
                  <select
                    style={mystyle}
                    id="dropdown"
                    onChange={(e) => setGenre(e.target.value)}
                  >
                    <option value="Action">Action</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Crime">Crime</option>
                    <option value="Comedy">Commedy</option>
                    <option value="Drama">Drama</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Horror">Horror</option>
                  </select>
                </div>
                <button className="btn btn-success mr-3 mt-4">Create</button>
                <button
                  type="button"
                  className="btn btn-danger mt-4"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default InputMovie;
