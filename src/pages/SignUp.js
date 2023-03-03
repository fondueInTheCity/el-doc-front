import React, { useState } from "react";
import { signUp } from "../firebase/Firebase";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const completeSignUp = () => {
      signUp(name, email, password);
    };

    const navigateToSignIn = () => {
      navigate("/login");
    }
    
    return (
      <Container>
        <Title>FunDoc</Title>
        <Label>Full Name</Label>
        <Input  type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"/>
        <Label>Email</Label>
        <Input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"/>
        <Label>Password</Label>
        <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"/>
        <Button onClick={completeSignUp}>Sign Up</Button>
        <Title>Already on FunDoc?</Title>
        <Button onClick={navigateToSignIn}>Click to Sign In</Button>
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

export default SignUp;