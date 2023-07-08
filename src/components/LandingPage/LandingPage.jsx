import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';
import LoginForm from '../LoginForm/LoginForm';

function LandingPage() {
  //state variable 
  const [heading, setHeading] = useState('Welcome');
  const [registered, setRegistered] = useState(false);
  const history = useHistory();



  const onLogin = (event) => {
    setRegistered(!registered);
  };

  return (
    <div className="landingContainer">
      <h2 id='heading'>{heading}</h2>

      <div className="grid">
        <div className="grid-col grid-col_8">
          <p id='description'>
           
            Planning for meals and grocery shopping is hard work. Pantry Pal helps you out by organizing the food in your fridge and showing you what recipes can be made with your ingredients! 
            Users are able to add to and maintain a ‘fridge’ of their ingredients. When they decide they want to make something, they can simply do a search and the app will show 
            them a list of recipes that can be made with the ingredients contained in their fridge. Users will have to register for an account if they wish to use this app. 
          </p>
         
          

        </div>

        <div className="grid-col grid-col_3">
        {!registered ? (
          <RegisterForm />
        ):(
          <LoginForm/>
        )}
          

          <center>
            
            {!registered ?(
              <div className='switch'>
                <h4>Already a Member?</h4>
                <button className="btn btn_sizeSm" onClick={onLogin}>
                Login
                </button>
              </div>
            ):(
              <div className='switch'>
              <h4>Don't have an account?</h4>
              <button className="btn btn_sizeSm" onClick={onLogin}>
              Register
              </button>
              </div>
            )}
            
          </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
