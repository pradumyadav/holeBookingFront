
import React, { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
 import "./Style.css"
export default function Login () {
  const [data, setData] = useState({
   
    email: "",
    password: "",
  });


  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
  
       .post("https://hallbookingsbackend.onrender.com/user/login", data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        if (res.data.token) {
          navigate("/home");
        } else {
          navigate("/login");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    setData({

      email: "",
      password: "",
    });
  };
  return (
    <div className="loginParent">
      <h1 id="heading">Log in</h1>
      <form onSubmit={handleSubmit}>
        <label className="word" htmlFor="email">Email: </label>
        <input className="text" type="email" name="email" id="email" onChange={handleChange} value={data.email}/>
        <br />
        <br />
        <label className="word" htmlFor="password">  Password: </label>
        <input className="text" type="password" maxLength="8" name="password" id="password"onChange={handleChange}value={data.password}/>
        <br />
        <br />
        <button className="btn1" type="submit">Submit</button>
      </form>
      
    </div>
  );
}
