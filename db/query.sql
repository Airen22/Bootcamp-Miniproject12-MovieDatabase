INSERT INTO movies(movie_name)
VALUES ("The Lord of the Rings: The Fellowship of the Ring");

SELECT * FROM movies

-- GET api/movies_plots
SELECT movie.movie_name AS movie, plots.plot 
FROM plots
LEFT JOIN movies
ON revews.movie_id = movies.id
ORDER BY movies.movie_name;