import React, { useState } from "react";
import { signUp } from "./Firebase";
import authStyles from "./Auth.module.css";

function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const completeSignInOrSignUp = () => {
      signUp(name, email, password);
    };
    
    return (
      <div className={authStyles.boxAuth}>
        <div className={authStyles.boxAuthContainer}>
          <label className={authStyles.title}>FunDoc</label>
            <input
              type="text"
              className={authStyles.inputAuth}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
            />
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
          <button className={authStyles.btnAuth} onClick={completeSignInOrSignUp}>
            {authButtonText}
          </button>
            <div className={authStyles.messageAuth}>
              Already on Just Food?
              <span className={authStyles.linkAuth}>
                Click to Sign In
              </span>
            </div>
        </div>
      </div>
    );
}

export default SignUp;