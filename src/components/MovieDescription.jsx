import React, { useEffect } from 'react';
import {useQuery} from 'react-query'
import axios from 'axios'


const MovieDescription = ({ match }) => {
  const id = match.params.movieid;
  const fetchMovie = async () => {
    try {
      let res = await axios.get(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
      )
      const info = res.data.data.movie
      return info
    }
    catch(err){
        console.log(err)
    }
  }
  const { data, status } = useQuery('movie', fetchMovie)

    useEffect(() => {
      fetchMovie()
      return () => fetchMovie()
    }, [data])

  return (
    <>
      {status === "success" && Object.keys(data).length > 0 ? (
        <div className="movie-card flex flex-col items-center md:flex-row">
          <div className="movie-image w-2/5  m-auto ">
            <img
              src={data.large_cover_image}
              className="mx-auto rounded"
              alt="img"
            />
          </div>
          <div className="movie-description  w-3/5 md:text-center lg:text-left md:flex md:flex-col md:justify-center">
            <h1 className="mb-3">{data.title}</h1>
            <p className="card-year text-center">{data.year}</p>
            <p className="card-year text-center mb-3">
              {data.genres.join(" / ")}
            </p>
            <p className="w-5/6 text-left intro">
              {data.description_intro}
            </p>
          </div>
        </div>
      ) : (
          <>
                  <div className="loader max-w-full h-screen min-w-sm">
            <svg
              version="1.1"
              id="L2"
              //   xmlns="http://www.w3.org/2000/svg"
              //   xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              enableBackground="new 0 0 100 100"
              //   xml:space="preserve"
            >
              <circle
                fill="none"
                stroke="#fff"
                strokeWidth="4"
                strokeMiterlimit="10"
                cx="50"
                cy="50"
                r="48"
              />
              <line
                fill="none"
                strokeLinecap="round"
                stroke="#fff"
                strokeWidth="4"
                strokeMiterlimit="10"
                x1="50"
                y1="50"
                x2="85"
                y2="50.5"
              >
                <animateTransform
                  attributeName="transform"
                  dur="2s"
                  type="rotate"
                  from="0 50 50"
                  to="360 50 50"
                  repeatCount="indefinite"
                />
              </line>
              <line
                fill="none"
                strokeLinecap="round"
                stroke="#fff"
                strokeWidth="4"
                strokeMiterlimit="10"
                x1="50"
                y1="50"
                x2="49.5"
                y2="74"
              >
                <animateTransform
                  attributeName="transform"
                  dur="15s"
                  type="rotate"
                  from="0 50 50"
                  to="360 50 50"
                  repeatCount="indefinite"
                />
              </line>
            </svg>
            <h1>
                Please relax and have some popcorn while THE movies details Load...
            </h1>
              </div>  
            </>
      )}
    </>
  );
  }

  
 export default MovieDescription;