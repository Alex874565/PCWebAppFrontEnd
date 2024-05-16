import React from "react";
import Navbar from "../../atoms/navBar/navBar";
import LoginForm from "../../atoms/forms/login/loginForm";
import GoogleLoginForm from "../../atoms/forms/googleLogin/googleLogin";
import "./login.css";
import "../../atoms/forms/googleLogin/googleLogin.css";
import Footer from "../../atoms/footer/footer"

const Login = () => {
    return (
        <div>
            <Navbar />
            <div className = "login-container">
                <h1 className = "title">Log in</h1>
                <LoginForm />
                <div className = "google-login-wrapper">
                    <p className = "login-with-google-text">Or log in with Google?</p>
                    <GoogleLoginForm />
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Login;