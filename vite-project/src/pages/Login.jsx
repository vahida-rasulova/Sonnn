
import React, { useState, useEffect } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import {FaFacebook,FaGooglePlusG } from "react-icons/fa"
import { Link } from "react-router-dom";
import "./Login.css"


function Sign() {
    const [addclass, setAddClass] = useState("")
    const [passwordType, setPasswordType] = useState('password')
    const [passwordIcon, setPasswordIcon] = useState(<AiOutlineEyeInvisible />)
    const handelToggle = () => {
        if (passwordType === 'password') {
            setPasswordType('text');
            setPasswordIcon(<AiOutlineEye />)
        } else {
            setPasswordType('password');
            setPasswordIcon(<AiOutlineEyeInvisible />)
        }
    }

    return (
        <section>
            <div className="login">
                <div className="login-text">
                    <form >
                        <h1>Login</h1>
                        <input type="text" placeholder='USERNAME' />
                        <div className="pasword-icon">
                            <input type={passwordType} placeholder='PASSWORD' />
                            <div className='pas-icons' onClick={handelToggle}>
                                {passwordIcon}
                            </div>
                        </div>
                        <div className="remember-me">
                            <input type="checkbox" /><p>Remember me</p>
                        </div>
                        <button className='loginBtn' type='submit'  >LOGIN</button>    
                        <div className="or-sign">
                       <hr />

               <span className='login-span'>or Login Up with</span>
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

             <p className='account-text'>Don't have an account? <a href="#" className='sign-up-btn2' ><Link to="/register"><b>Register</b></Link></a></p>
         </form>
            
                </div>
          
                <div className="login-img">
<img src="https://i.pinimg.com/564x/7d/9d/bf/7d9dbff60d2c4e3e6bf3dfa9af387eca.jpg" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Sign