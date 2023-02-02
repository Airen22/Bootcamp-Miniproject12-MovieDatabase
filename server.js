const express = require('express');
const mysql = require('mysql2')
const PORT = 3001;

const app = express();

// connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL Username
      user: 'root',
      // TODO: Add MySQL Password
      password: 'Beach m@yor t3ar',
      database: 'movies_db'
    },
    console.log(`Connected to the movies_db database.`)
  );
// Read all movies
app.get('/api/movies', (req, res) => {
    const sql = `SELECT id, movie_name AS title FROM movies;`;
    
    db.query(sql, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
         return;
      }
      res.json({
        message: 'success',
        data: result
      });
    });
  });

// show movies and plots

app.get('/api/movies-plots', (req, res) => {
    const sql = `SELECT id, movie_name AS title FROM movies;`;
    
    db.query(sql, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
         return;
      }
      res.json({
        message: 'success',
        data: result
      });
    });
  });
//   SELECT movie.movie_name AS movie, plots.plot 
//   FROM plots
//   LEFT JOIN movies
//   ON revews.movie_id = movies.id
//   ORDER BY movies.movie_name;

// add movie
app.post('/api/add-movie', (req, res) => {
    newMovie = req.body.movie_name;
    const sql = `INSERT INTO movies(movie_name) VALUES (?);`; newMovie
    
    db.query(sql, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
         return;
      }
      res.json({
        message: 'success',
        data: result
      });
    });
  });

// update movie plot
app.put('/api/update-plot', (req, res) => {
    newPlot = req.body.plot;
    const sql = `UPDATE plots SET plot = ? TO movies(movie_name) VALUES (?);`; newPlot
    
    db.query(sql, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
         return;
      }
      res.json({
        message: 'success',
        data: result
      });
    });
  });

  // delete a movie
app.DELETE('/api/delete-movie', (req, res) => {
    var deleteID;
    const sql = `DLELETE FROM movies WHERE id= ?`; deleteID;
    
    db.query(sql, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
         return;
      }
      res.json({
        message: 'success',
        data: result
      });
    });
  });

  app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);