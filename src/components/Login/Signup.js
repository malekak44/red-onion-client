import React from 'react';
import './Signup.css';
import logo from '../../images/navlogo.png';
import { Link } from 'react-router-dom';
import google from '../../images/google.png';
import facebook from '../../images/fb.png';
import twitter from '../../images/twt.png';
import firebase from 'firebase/app';
import "firebase/auth";
import firebaseConfig from '../../firebase.config';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const Signup = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const facebookProvider = new firebase.auth.FacebookAuthProvider();
    const twitterProvider = new firebase.auth.TwitterAuthProvider();

    const handleGoogleSignup = () => {
        firebase.auth().signInWithPopup(googleProvider)
            .then(result => {
                console.log(result.user.displayName);
            })
            .catch(err => {
                console.log(err)
            });
    }
    const handleFacebookSignup = () => {
        firebase.auth().signInWithPopup(facebookProvider)
            .then(result => {
                console.log(result)
            })
            .catch(err => {
                console.log(err);
            })
    }
    const handleTwitterSignup = () => {
        firebase.auth().signInWithPopup(twitterProvider)
            .then(result => {
                console.log(result)
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div className="signup-area">
            <img src={logo} alt="logo" />
            <form>
                <input type="text" name="name" autoComplete="off" placeholder="Name" />
                <input type="text" name="email" autoComplete="off" placeholder="Email" />
                <input type="password" name="password" autoComplete="off" placeholder="Password" />
                <input type="password" name="conpass" autoComplete="off" placeholder="Confirm Password" />
                <input type="submit" value="Sign up" />
            </form>
            <h6>Or continue with</h6>
            <div className="social-media">
                <img src={google} onClick={handleGoogleSignup} alt="google" style={{ width: "54px" }} />
                <img onClick={handleFacebookSignup} src={facebook} alt="facebook" />
                <img onClick={handleTwitterSignup} src={twitter} alt="twitter" />
            </div>
            <Link to="/signin" style={{ textDecoration: "none" }}>
                <p>Already have an account</p>
            </Link>
        </div>
    );
};

export default Signup;