import React, {  useContext } from 'react'
import { Link } from 'react-router-dom'
import { moviesContext } from "./MovieContextProvider";
// import MovieDescription from "./MovieDescription";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Films = () => {
    const {getStuf } = useContext(moviesContext)

    const my = getStuf.map((ele) => {
      return (
        <div className="card" key={ele.id}>
                <Link   to={`/${ele.id}`} >
              <div className="image-box h-34">
                  <img
                    className="image rounded"
                    src={ele.medium_cover_image}
                    alt={ele.name}
                  />
                </div>
              </Link>
                <div className="card-details">
                  <h1>{ele.title}</h1>
                  <p className="card-year">{ele.year}</p>
                </div>
          </div>
        );
    })

    return (
      <div className="films">
        {my}
      </div>
    );
}
 
export default Films;