const express = require('express');

const PORT = 3001;

const app = express();


app.get
// Read all movies
app.get('/api/movies', (req, res) => {
    const sql = `SELECT id, movie_name AS title FROM movies`;
    
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