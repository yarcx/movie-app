import React, { createContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query'
import axios from 'axios'

export const moviesContext = createContext();




const MoviesContextProvider = (props) => {
  const [getStuf, setGetStuf] = useState([])
  const [error, setError] = useState(true)

  // FETCHING DATA WITH AXIOS

  const fetchMovies = async () => {
    try {
      let res = await axios.get("https://yts.mx/api/v2/list_movies.json?quality=3D");
      let data = await res.data
      setGetStuf(data.data.movies)
      setError(false)
      
    } catch (error) {
      console.log(error)
    }
  }
  const {data, status} = useQuery('movies', fetchMovies)

      
      useEffect(() => {
        fetchMovies()
  
       return () =>  fetchMovies()

    }, []);

    return (
        <moviesContext.Provider value={{ getStuf, error}}>
            {props.children}
        </moviesContext.Provider>
    )
}

export default MoviesContextProvider