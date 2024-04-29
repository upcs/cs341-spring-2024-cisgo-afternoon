import React from 'react';
import { useNavigate } from 'react-router-dom';

import NavBar from '../components/NavBar.js';
import '../static/css/pages/AdminLogin.css';

const AdminLogin = () => {
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const email = formData.get("username");
    const password = formData.get("password");

    fetch(`${process.env.REACT_APP_API}/auth/login`, {
      method: "post",   // prevent caching or logs of credentials
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: email,
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
        if (data.accessToken) {
          console.log("GL+GEI")
          fetch('http://localhost:3000/admin', {
            method: "GET",
            headers: {
              Authorization: `Bearer ${data.accessToken}`
            }
          }).then((data) => window.location.href = 'http://localhost:3000/admin');
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div>
      <NavBar />
      <header class="admin_header">
        <h1 class="admin_title">Welcome Back Admin!</h1>
      </header>
      <main class="admin_main">
        <form onSubmit={handleLogin} method="get" class="login-form">
          <input type="username" class="admin-email" name="username" placeholder="Username" required></input>
          <br />
          <input type="password" class="password" name="password" placeholder="Password" required></input>
          <br />
          <button type="submit" class="login-button">Log In</button>
        </form>
      </main>
    </div>
  );
}

export default AdminLogin;

