
import React, { useState, useEffect } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import {FaFacebook,FaGooglePlusG } from "react-icons/fa"
import { Link } from "react-router-dom";
import "./Login.css"


function Register() {
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
          <section>
            <div className="login">
                <div className="login-img">
                    <img src="https://images.unsplash.com/photo-1578500494198-246f612d3b3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                </div>
                <div className="login-text">
        <form >
       <h1>Create Account</h1>
                        <input type="text" placeholder='NAME' />
                        <input type="email" placeholder='EMAIL' />
                        <div className="pasword-icon">
                            <input type={passwordType} placeholder='PASSWORD' />
                            <div className='pas-icons' onClick={handelToggle}>
                                {passwordIcon}
                            </div>
                        </div>
                        <div className="remember-me">
                            <input type="checkbox" /><p>I agree  <b>Terms </b>the Privacy Policy</p>
                        </div>
                        <button className='loginBtn' type='submit'>REGISTER</button>

                        <div className="or-sign">
                            <hr />
                            <span className='login-span'>or Register with</span>
                        </div>
                     

                        <div className="forum-img">
                <div className="login-f">
                <div className="login-watch-icon">
                    <FaFacebook />
               </div>
               <p>Facebook</p>
               
                </div>
               <div className="login_g">
               <div className="login-watch-icon_g">
               <FaGooglePlusG/>
                 </div>
                 <p>Google</p>
               </div>
                
               
            </div>

            <p className='account-text'>Don't have an account? <a href="#" className='sign-up-btn2' ><Link to="/login"><b>Login</b></Link></a></p>
        </form>

    </div>
    </div>
  
  </section>
    )
}

export default Register