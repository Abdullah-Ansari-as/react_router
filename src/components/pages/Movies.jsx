import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Cards from '../UI/Cards';
import '../UI/Cards.css'

function Movies() {

  const moviesData = useLoaderData()
  // console.log(moviesData);
  

  return (
    <>
       <ul className='container grid grid-four--cols'>
        { moviesData && moviesData.Search.map((curMovie) => {
          // console.log(curMovie); // ya console movie wala link per pr hi ja kr show ho ga
          
          return <Cards key={curMovie.imdbID} curMovie={curMovie}/>

        })}
       </ul>
    </>
  )
}

export default Movies
