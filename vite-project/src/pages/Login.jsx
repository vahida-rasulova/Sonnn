
import React, { useState, useEffect } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { FaLinkedinIn, FaFacebookF, FaGoogle,FaTwitter} from "react-icons/fa"

import "./Login.css"


function Sign() {
    useEffect(() => {
        document.title = 'Login';
    }, []);
    const [addclass, setAddClass] = useState("")
    const [passwordType, setPasswordType] = useState('password')
    const [passwordIcon, setPasswordIcon] = useState(<AiOutlineEyeInvisible />)
    const [signUp, setSignUp] = useState('sign-up-container')
    const [signIn, setSignIn] = useState('sign-in-container')

    const handelToggle = () => {
        if (passwordType === 'password') {
            setPasswordType('text');
            setPasswordIcon(<AiOutlineEye />)
        } else {
            setPasswordType('password');
            setPasswordIcon(<AiOutlineEyeInvisible />)
        }
    }

    const chanceSiginUp = () => {
        if (signIn === 'sign-in-container') {
            setSignIn("remove-sign-in")
            setSignUp('sign-up-container')
        } else {
            setSignIn("sign-in-container")
            setSignUp('remove-up-sign')
        }


    }


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

  
    const handleLogin = async (e) => {
        e.preventDefault();
      try {
        const response = await fetch('http://127.0.0.1:8000/api/login/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log(data.token);
     
          setErrorMessage(''); 
        } else {
          const errorData = await response.json();
          setErrorMessage(errorData.error || 'Unknown error occurred.');
        }
      } catch (error) {
        console.error(error);
        setErrorMessage('Unknown error occurred.');
      }
    };

      const [Rusername, RsetUsername] = useState('');
      const [Rpassword, RsetPassword] = useState('');
      const [email, setEmail] = useState('');
    

      const handleRegister = async () => {
        try {
          const response = await fetch('/api/register/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ Rusername, Rpassword, email }),
          });
      
          if (!response.ok) {
            throw new Error('Registration failed');
          }
      
          const data = await response.json();
          console.log(data.message);
        } catch (error) {
          console.error(error);
        }
      };



    return (
        <section className='login'>
            <div className={`container-login ${addclass}`} id='container-login'>
                {/* <div className="login-col"> */}
                <div className={`form-container ${signUp} `}>
                    <form >
              
                        <h1>Create Account</h1>
                        
                        <input type="text" placeholder='USERNAME' onChange={(e) => RsetUsername(e.target.value)} />
                        <input type="email" placeholder='EMAIL' onChange={(e) => setEmail(e.target.value)} />
                        <div className="pasword-icon">
                            <input type={passwordType} placeholder='PASSWORD' onChange={(e) => RsetPassword(e.target.value)} />
                            <div className='pas-icons' onClick={handelToggle}>
                                {passwordIcon}
                            </div>
                        </div>
                        <div className="remember-me">
                            <input type="checkbox" /><p>I agree  <b>Terms </b>the Privacy Policy</p>
                        </div>
                        <button className='loginBtn' type='submit'  onClick={handleRegister}>REGISTER</button>

                        <div className="or-sign">
                            <hr />
                            <span className='login-span'>or Register with</span>
                        </div>
                        <hr />

                        <div className="forum-img">
<div className="login-watch-icon">
    <FaFacebookF/>
</div>
<div className="login-watch-icon">
    <FaGoogle/>
</div>
<div className="login-watch-icon">
    <FaTwitter/>
</div>
<div className="login-watch-icon">
    <FaLinkedinIn/>
</div>
</div>
                        <p className='account-text'>Don't have an account? <a href="#" className='sign-up-btn2' onClick={chanceSiginUp}><b>Login</b></a></p>
                    </form>
                    <hr />
                </div>
                <div className={`form-container  ${signIn}`}>
                    <form >
                        <h1>Login</h1>
                        {errorMessage && <div>{errorMessage}</div>}
                        <input type="text" placeholder='USERNAME' onChange={(e) => setUsername(e.target.value)}/>
                        <div className="pasword-icon">
                            <input type={passwordType} placeholder='PASSWORD' onChange={(e) => setPassword(e.target.value)}/>
                            <div className='pas-icons' onClick={handelToggle}>
                                {passwordIcon}
                            </div>
                        </div>
                        <div className="remember-me">
                            <input type="checkbox" /><p>Remember me</p>
                        </div>

                        <button className='loginBtn' type='submit' onClick={handleLogin} >LOGIN</button>
                        <div className="or-sign">
                            <hr />
                            <span className='login-span'>or Login Up with</span>
                        </div>
                        <hr />
                        <div className="forum-img">
<div className="login-watch-icon">
    <FaFacebookF/>
</div>
<div className="login-watch-icon">
    <FaGoogle/>
</div>
<div className="login-watch-icon">
    <FaTwitter/>
</div>
<div className="login-watch-icon">
    <FaLinkedinIn/>
</div>
</div>

                        <p className='account-text'>Don't have an account? <a href="#" className='sign-up-btn2' onClick={chanceSiginUp}><b>Register</b></a></p>
                    </form>

                </div>
                {/* </div> */}

                <div className="overlay-container">
                    <div className="overlay-sign">
                        <div className="overlay-panel overlay-left">
                            <div className="overlay-img">
                                <img src="./images/Login/Green.png" alt="" />
                            </div>
                            <button className='ghost' id='signIn' onClick={() => setAddClass("")}>GO TO LOGIN</button>

                        </div>
                        <div className="overlay-panel overlay-right">
                            <div className="overlay-img">
                                <img src="./images/Login/Green.png" alt="" />
                            </div>
                            <button className='ghost' id='signUp' onClick={() => setAddClass("right-panel-active")}>GO TO REGISTER</button>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default Sign