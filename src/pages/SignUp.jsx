import React, { useState } from "react";
import { AuthForm } from "../components";

const SignUp = () => {
  const stateObj = {
    username: "",
    email: "",
    password: "",
  };
  const [state, setState] = useState(stateObj);

  const { username, email, password } = state;

  const data = [
    {
      id: "username",
      value: username,
      type: "text",
      placeHolder: "Enter Username Here",
      onChange: (e) => {
        setState({ ...state, username: e.target.value });
      },
    },
    {
      id: "email",
      value: email,
      type: "email",
      placeHolder: "Enter Email Here",
      onChange: (e) => {
        setState({ ...state, email: e.target.value });
      },
    },
    {
      id: "password",
      value: password,
      type: "password",
      placeHolder: "Enter Password Here",
      onChange: (e) => {
        setState({ ...state, password: e.target.value });
      },
    },
  ];

  return <AuthForm data={data} />;
};

export default SignUp;
