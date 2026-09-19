import React, { useState } from "react";
import "./Login.css";

function Login({ onLogin }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    // DEMO LOGIN
    if (username === "admin" && password === "admin123") {

      setError("");

      if (onLogin) {
        onLogin();
      }

    } else {

      setError(
        "Invalid username or password. Please use the demo credentials below."
      );

    }
  };

  return (

    <div className="login-page">

      <div className="login-card">

        {/* Logo */}

        <div className="login-logo">
          🔐
        </div>


        {/* Heading */}

        <h1>
          AI Powered
        </h1>

        <h2>
          Community Health Dashboard
        </h2>

        <div className="login-subtitle">
          Smart Healthcare Analytics System
        </div>


        <form onSubmit={handleLogin}>

          {/* Username */}

          <div className="login-input-wrapper">

            <span className="input-icon">
              👤
            </span>

            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setError("");
              }}
              required
            />

          </div>


          {/* Password */}

          <div className="login-input-wrapper">

            <span className="input-icon">
              🔑
            </span>

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              required
            />

            <button
              type="button"
              className="password-toggle"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              title={
                showPassword
                  ? "Hide password"
                  : "Show password"
              }
            >
              {showPassword ? "🙈" : "👁️"}
            </button>

          </div>


          {/* Error */}

          {error && (

            <div
              style={{
                color: "#dc2626",
                fontSize: "12px",
                marginBottom: "15px"
              }}
            >
              {error}
            </div>

          )}


          {/* Login */}

          <button
            type="submit"
            className="login-button"
          >
            Login
          </button>

        </form>


        {/* Demo credentials */}

        <div className="demo-login">

          <strong>Demo Login</strong>

          <br />

          Username:
          {" "}
          <code>admin</code>

          <br />

          Password:
          {" "}
          <code>admin123</code>

        </div>


        <div className="login-security">
          🔒 Secure community healthcare management system
        </div>

      </div>

    </div>
  );
}

export default Login;