import React from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth } from "../fire";

function Login() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    if (e.keyCode === 13) {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((auth) => {
          history.push("/");
        })
        .catch((error) => alert(error.message));
    }
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  useEffect(() => {
    document.addEventListener("keyup", signIn);
    return () => document.removeEventListener("keyup", signIn);
  });

  return (
    <div className="login">
      <div className="login__content">
        <Link to="/">
          <img
            src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
            alt="logo"
          />
        </Link>
        <p>Enter Email</p>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>Enter Password</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="login__terms">
          By continuing, you agree to Flipkart's Terms of Use and Privacy
          Policy.
        </p>
        <button onClick={signIn} type="submit">
          Login
        </button>
        <br />
        <button onClick={register}>Register</button>
      </div>
    </div>
  );
}

export default Login;
