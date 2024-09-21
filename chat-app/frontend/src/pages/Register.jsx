import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { registerRoute } from "../utils/APIRoutes";

function Register() {
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pasuseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  //lookup table

  const validationRules = [
    {
      check: ({ password, confirmPassword }) => password !== confirmPassword,
      message: "Password and confirm password should be same.",
    },
    {
      check: ({ username }) => username.length < 3,
      message: "Username should be greater than 3 characters.",
    },
    {
      check: ({ password }) => password.length < 8,
      message: "Password should be equal or greater than 8 characters",
    },
    {
      check: ({ email }) => email === "",
      message: "Email is required.",
    },
  ];

  //configuration object

  const validationMesssages = {
    passwordMatch: "Password and confirm password should be same.",
    usernameLength: "Username should be greater than 3 characters.",
    passwordLength: "Password should be equal or greater than 8 characters",
    emailRequired: "Email is required.",
  };

  const validators = {
    passwordMatch: ({ password, confirmPassword }) =>
      password !== confirmPassword,
    usernameLength: ({ username }) => username.length < 3,
    passwordLength: ({ password }) => password.length < 8,
    emailRequired: ({ email }) => email === "",
  };

  const handleValidation = () => {
    const { password, confirmPassword, username, email } = values;

    // if (password !== confirmPassword) {
    //   toast.error("Password and confirm password should be same", toastOptions);
    //   return false;
    // } else if (username.length < 3) {
    //   toast.error("Username should be greater than 3 characters", toastOptions);
    //   return false;
    // } else if (password.length < 8) {
    //   toast.error(
    //     "Password should be equal or greater than 8 characters",
    //     toastOptions
    //   );
    //   return false;
    // } else if (email === "") {
    //   toast.error("Email is required", toastOptions);
    //   return false;
    // }
    // return true;

    //lookup
    // for (const rule of validationRules) {
    //   if (rule.check({ username, password, confirmPassword, email })) {
    //     toast.error(rule.message, toastOptions);
    //     return false;
    //   }
    // }
    // return true;

    //configuration object

    for (const [key, validator] of Object.entries(validators)) {
      if (validator({ username, password, confirmPassword, email })) {
        toast.error(validationMesssages[key], toastOptions);
        return false;
      }
    }
    return true;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (handleValidation()) {
      //make a register api call
    const {username, password, email} = values;
      const {data} = await axios.post(registerRoute,{
        username,
        email,
        password
      });

      if(data.status === false){
        toast.error(data.msg, toastOptions)
      };
      if(data.status === true){
        localStorage.setItem("chat-app-user", JSON.stringify(data.user));
        navigate('/');
      };
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };
  return (
    <>
      <FormContainer>
        <form onSubmit={(evt) => handleSubmit(evt)}>
          <div className="brand">
            <img src="" alt="" />
            <h1>Chat App</h1>
          </div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Create User</button>
          <span>
            already have an account? <Link to="/login">Login</Link>{" "}
          </span>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  );
}

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: white;
      text-transform: uppercase;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 3rem 5rem;
  }

  input {
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid #4e0eff;
    border-radius: 0.4rem;
    color: white;
    width: 100%;
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid #997af0;
      outline: none;
    }
  }
  button {
    background-color: #4e0eff;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    text-transform: uppercase;
    &:hover {
      border: 0.1rem solid #997af0;
      outline: none;
    }
  }

  span {
    color: white;
    text-transform: uppercase;
    a {
      color: #4e0eff;
      text-decoration: none;
      font-weight: bold;
    }
  }
`;

export default Register;
