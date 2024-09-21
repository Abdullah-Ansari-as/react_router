import React from 'react'
import './Cards.css'
import { NavLink } from 'react-router-dom';

function Cards({ curMovie }) { 
  
  return (
    <li className="hero-container">
      <div className="main-container">
        <div className="poster-container">
          <img src={curMovie.Poster} className="poster" alt={curMovie.Title} />
        </div>
        <div className="ticket-container">
          <div className="ticket__content">
            <NavLink to={`/movies/${curMovie.imdbID}`}>
              <button className="ticket__buy-btn">Watch now</button>
            </NavLink>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Cards