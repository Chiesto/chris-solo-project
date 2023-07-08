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
           
            Planning for meals can be hard work. Especially when you get to the end of your groceries and your options become limited. Pantry Pal helps you out by organizing the 
            food in your fridge and showing you what recipes can be made with your left over ingredients! <br/>
            You are able to add to and maintain a ‘fridge’ of your ingredients. When you decide you want to make something, you can simply do a search and the app will show 
            you a list of recipes that can be made with the ingredients contained in your fridge. Stop wasting your left over groceries and sign up today!
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
