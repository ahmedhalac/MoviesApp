const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();

//middleware
app.use(express.json()); //access to req.body
app.use(cors());

//posting movie in db

app.post("/api/movies", async (req, res) => {
  try {
    const { name, genre } = req.body;

    const newMovie = await pool.query(
      "INSERT INTO movie (name, genre) VALUES($1, $2) RETURNING *",
      [name, genre]
    );
    res.json(newMovie.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get all movies
app.get("/api/movies", async (req, res) => {
  const getAll = await pool.query("SELECT * FROM movie");
  res.json(getAll.rows);
});

app.listen(5000, () => {
  console.log("Listening on port 5000...");
});

//get movies with specific id
app.get("/api/movies/:id", async (req, res) => {
  const { id } = req.params;
  var getSpecificMovie = await pool.query("SELECT * FROM movie WHERE id = $1", [
    id,
  ]);
  res.json(getSpecificMovie.rows[0]);
});

//update movie
app.put("/api/movies/:id", async (req, res) => {
  const { id } = req.params;
  const { name, genre } = req.body;
  const updateMovies = await pool.query(
    "UPDATE movie SET name = $1, genre = $2 WHERE id = $3",
    [name, genre, id]
  );
  res.json(updateMovies.rows[0]);
});

//delete movie

app.delete("/api/movies/:id", async (req, res) => {
  const { id } = req.params;
  const deleteMovie = await pool.query("DELETE FROM movie WHERE id = $1", [id]);
  res.json("Movie was deleted");
});
