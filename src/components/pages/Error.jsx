import { NavLink, useNavigate, useRouteError } from "react-router-dom";

const Error = () => {

    const error = useRouteError()
    console.log(error);
    

    const navigate = useNavigate()
    
    const handleGoBack = () =>{
 
        // navigate('/') //go back to Home page

         navigate(-1) // go back to previous page
    }   

    return (
      <section className=" error-section">
        <div id="error-text">
          <figure>
            <img
            className="error-image"
              src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"
              alt="404 page"
            />
          </figure>
          <div>
            <h1>{error.data}</h1>
            <h2>{error.status}</h2>
          </div>
          <div className="text-center">
            <p className="p-a">
              . The page you were looking for could not be found
            </p>
            <p className="p-b">... Back to previous page</p>
          </div>
        </div>
        {/* <NavLink to="/" className="btn">
          Go Back To HomePage
        </NavLink> */}
        <button className="btn" onClick={handleGoBack}>Go Back</button>
        
      </section>
    );
   
};

export default Error