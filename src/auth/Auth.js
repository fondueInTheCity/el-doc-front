import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, signIn, signUp } from "./Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import authStyles from "./Auth.module.css";

function Auth() {
  const [authButtonText, setAuthButtonText] = useState("Sign In");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  const completeSignIn = () => {
    signIn(email, password);
  };
  
  return (
    <div className={authStyles.boxAuth}>
      <div className={authStyles.boxAuthContainer}>
        <label className={authStyles.title}>FunDoc</label>
        <input
          type="text"
          className={authStyles.inputAuth}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          className={authStyles.inputAuth}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button className={authStyles.btnAuth} onClick={completeSignIn}>
          Sign In
        </button>
          <div className={authStyles.messageAuth}>
            New to FunDoc?
            <span className={authStyles.linkAuth}>
              Click to Sign Up
            </span>
          </div>
      </div>
    </div>
  );
}
export default Auth;