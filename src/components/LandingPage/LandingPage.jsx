import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';
import LoginForm from '../LoginForm/LoginForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const [registered, setRegistered] = useState(false);
  const history = useHistory();

  const onLogin = (event) => {
    setRegistered(!registered);
  };

  return (
    <div className="container">
      <h2>{heading}</h2>

      <div className="grid">
        <div className="grid-col grid-col_8">
          <p>
            APP DESCRIPTION:
          </p>

          <p>
            FUN GIF OR PICTURE
          </p>

        </div>
        <div className="grid-col grid-col_4">
        {!registered ? (
          <RegisterForm />
        ):(
          <LoginForm/>
        )}
          

          <center>
            
            {!registered ?(
              <>
                <h4>Already a Member?</h4>
                <button className="btn btn_sizeSm" onClick={onLogin}>
                Login
                </button>
              </>
            ):(
              <>
              <h4>Don't have an account?</h4>
              <button className="btn btn_sizeSm" onClick={onLogin}>
              Register
              </button>
              </>
            )}
            
          </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
