import React from 'react';

import '../static/css/pages/Login.css';

const Login = () => {

  const handleLogin = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const email = formData.get("email");
    const password = formData.get("password");

    console.log(`EMAIL: ${email}\tPASSWORD: ${password}`);

    fetch(`${process.env.REACT_APP_API}/auth/login`, {
      method: "post",   // prevent caching or logs of credentials
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(res => {
        if (!res.ok) {
          throw new Error("HTTP Error " + res.status);
        }
        return res.json();
      })
      .then(data => {
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div classname="login_container">
      <h1 classname="login_header">Welcome Back!</h1>
      <body classname="login_body">
        <form onSubmit={handleLogin} method="get" id="login-form">
          <input type="email" id="email" name="email" placeholder="Email" required></input>
          <br />
          <input type="password" id="password" name="password" placeholder="Password" required></input>
          <br />
          <button type="submit">Log In</button>
        </form>
      </body>
    </div>
  );
}

export default Login;

