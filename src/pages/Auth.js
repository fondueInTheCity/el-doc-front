import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, signIn, signUp } from "../firebase/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from 'styled-components';

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

  const navigateToSignUp = () => {
    navigate("/signup");
  }

  const completeSignIn = () => {
    signIn(email, password);
  };

  return (
    <Container>
        <Title>FunDoc</Title>
        <Button onClick={navigateToSignUp}>Sign up</Button>
        <Label>Email Adress</Label>
        <Input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email" />
        <Label>Password</Label>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password" />
        <Button onClick={completeSignIn}>Sign In</Button>
        </Container>
  );
}

const Container = styled.div`
  border-radius: 5px;
  display: flex;  
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  color: #fff;
  display: flex;
  font-size: 40px;
  font-weight: bold;
  white-space: nowrap;
  flex-direction: column;
  margin-bottom: 1em;
`;

const Button = styled.button`
  color: #f9fd6d;
  background-color: #16202a;
  font-size: 20px;
  font-weight: bold;
  white-space: nowrap;
  flex-direction: column;
  border-radius: 45px;
  border-color: #f9fd6d;S
  box-sizing: border-box;
  width: 50%;
  align-items: center;
  display: flex;
  height: 55px;
  justify-content: center;
  margin-bottom: 1em;
  cursor: pointer;
`;

const Label = styled.label`
color: #fff;
  font-size: 15px;
  font-weight: 500;
  flex-direction: column;
`;

const Input = styled.input`
color: #6b6b6b;
  font-size: 14px;
  height: 55px;
  font-weight: 500;
  flex-direction: column;
  border-radius: 45px;
  box-sizing: border-box;
  width: 50%;
  margin-bottom: 1em;
`;

export default Auth;