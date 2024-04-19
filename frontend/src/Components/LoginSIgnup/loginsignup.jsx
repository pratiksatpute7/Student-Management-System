import React from "react";
import './loginsignup.css'
import loginbut from '../Assets/loginbutton.png'
import signupbut from '../Assets/signupbutton.png'
import rect from '../Assets/Rectangle1.png'
const loginsignup = () => {
    return(
        <div className="container">
            <div className="header">
                <div className="text">Sign Up</div>
                <div className="Underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <input type="username" placeholder="Username"/>
                </div>
                <div className="input">
                    <input type="email" placeholder="Email"/>
                </div>
                <div className="input">
                    <input type="password" placeholder="Password"/>
                </div>
            </div>
            <div className="forgot-password">Forgot password?<span>Click Here</span></div>
            <div className="submit">Sign Up</div>
        </div>
    )
}

export default loginsignup