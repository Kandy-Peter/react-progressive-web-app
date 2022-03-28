import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Movies = () => {
    const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(process.env.REACT_APP_MOVIE_API_KEY)

  useEffect(() => {
    setLoading(true);

    axios.get(`https://api.themoviedb.org/3/discover/tv`, {
      params: {
        sort_by: 'popularity.desc',
        api_key: process.env.REACT_APP_MOVIE_API_KEY,
      }
    })
      .then( (response) => {
        setLoading(false);
        setMovies(response?.data?.results);
      })
      .catch( (error) => {
        setLoading(false);
        console.log(error);
      })
  }, [])

  return (
      <div className="flex flex-wrap -mb-4">
        My movie
        {/* {!loading && movies?.length ? movies.map( (movie, index) =>  <Movie key={movie?.id ?? index} movie={movie}/>) : <h2>Loading...</h2>} */}
      </div>
    )
  }

export default Movies;