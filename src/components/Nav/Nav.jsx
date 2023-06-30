import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

function Nav() {
  const user = useSelector((store) => store.user);
  const location = useLocation();

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">Pantry Pal!</h2>
      </Link>
      <div>
        {/* If the user is on the about page, show these links */}
        {location.pathname==='/about' ? (
          //on the about page but NOT logged in
          !user.id?(
            <>
            <Link className="navLink" to="/home">
              Login / Register
            </Link>
            </>
       
          ):(
           //on the about page but IS logged in
              <>
                <Link className="navLink" to="/fridge">
                  Back to Fridge
                </Link>
                <LogOutButton className="navLink" />
                
              </>
            
          )):(// else user is NOT on the about page, show these links
            <>
              {user.id?(
                // user IS logged in
                
                <LogOutButton className="navLink" />
                  ):(
                    //user is NOT logged in
                <Link className="navLink" to="/home">
                  Login / Register
                </Link>
                )}
              {/* user is NOT on about page always show About link. Doesn't matter 
              if user's logged in or not */}
              <Link className="navLink" to="/about">
                About
              </Link>
              </>
              
            

              
            )
        }
        

        
      </div>
    </div>
  );
}

export default Nav;
