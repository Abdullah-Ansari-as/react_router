import React from 'react'
import '../UI/Cards.css'
import { useLoaderData } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
// import { useParams } from 'react-router-dom'

function MoviesDetails() {

  // used to get url values (like id's)
  // but the new way introduced in which we have no need to Use useParams hook. Explore file (getMoviesDetails.jsx)
  // const param = useParams()
  // console.log(param );
  
  const movieData = useLoaderData();
  console.log(movieData);
  
  const { 
    Poster,
    Title,
    Runtime, 
    Type,
    Year,
    Plot,
    BoxOffice, 
    Awards,
    imdbRating,
  } = movieData;

  // handle 192 minutes in 3hr 14min
  const totalMins = Runtime.replace("min", "")
  const hours = Math.floor(totalMins / 60) // calculate the numbers of hours
  const minutes = totalMins % 60;  // calculate the remaining minutes
  //  console.log(hours, minutes);
  const finalTime = `${hours}hr ${minutes}min`
  console.log(finalTime);
  


  return (
    <li className="hero-container hero-movie-container">
      <div className="main-container">
        <figure className="movie">
          <div className="movie__hero">
            <img src={Poster} alt="Rambo" className="movie__img" />
          </div>
          <div className="movie__content">
            <div className="movie__title">
              <h1 className="heading__primary">
                {Title} <i className="fas fa-fire"></i>
              </h1>
              <div className="movie__tag movie__tag--1">{`#${Type}`}</div>
              <div className="movie__tag movie__tag--2">Year: {Year}</div>
            </div>
            <p className="movie__description">{Plot}</p>
            <br />
            <p className="movie__description">Awards: {Awards}</p>
            <div className="movie__details">
              <p className="movie__detail">
                <span className="icons icons-red">
                  <i className="fas fa-camera-retro"></i>
                </span>
                Rating: {imdbRating}
              </p>
              <p className="movie__detail">
                <span className="icons icons-grey">
                  <i className="fas fa-clock"></i>
                </span>
                {finalTime}
              </p>
              <p className="movie__detail">
                <span className="icons icons-yellow">
                  <i className="fas fa-file-invoice-dollar"></i>
                </span>
                {BoxOffice}
              </p>
            </div>
            <div>
              <NavLink
                to="/movies"
                className="movie__tag movie__tag--2"
                style={{ textAlign: "center", fontSize: "1.6rem" }}
              >
                Go Back
              </NavLink>
            </div>
          </div>
          <div className="movie__price">{BoxOffice}</div>
        </figure>
      </div>
    </li>
  ); 
};
  
export default MoviesDetails
