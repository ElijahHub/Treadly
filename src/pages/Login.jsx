import React, { useState } from "react";
import { AuthForm } from "../components";

const Login = () => {
  const stateObj = {
    email: "",
    password: "",
  };
  const [state, setState] = useState(stateObj);

  const { email, password } = state;

  const data = [
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

export default Login;