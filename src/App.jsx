import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom' 
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Home from './components/pages/Home'
import Movies from './components/pages/Movies' 
import AppLayout from './components/Layout/AppLayout'
import Error from './components/pages/Error'
import getMoviesData from './api/GetApiData'
import './App.css'
import MoviesDetails from './components/UI/MoviesDetails'
import getMoviesDetails from './api/GetMoviesDetails'
import { contactData } from './components/pages/Contact'

function App() { 

  // 1st Method
 /* const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/movies',
      element: <Movies />
    },
    {
      path: '/contact',
      element: <Contact />
    },
  ]) */

  // 2nd Method -> Best & Easy
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<AppLayout />} errorElement={<Error />} > 
        <Route path='' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/movies' element={<Movies />} loader={getMoviesData} /> 
        <Route path='/movies/:movieID' element={<MoviesDetails />} loader={getMoviesDetails}/>  {/*->dynamic routing*/}
        <Route path='/contact' element={<Contact />} action={contactData}/>
      </Route>
    )
  )



  return (
     <RouterProvider router={router}/>
  )
}

export default App
