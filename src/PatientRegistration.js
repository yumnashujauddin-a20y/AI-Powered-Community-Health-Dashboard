import React, { useState } from "react";
import "./App.css";

function App() {
  const [patient, setPatient] = useState({
    name: "",
    age: "",
    gender: "Male",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setPatient({
      ...patient,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!patient.name || !patient.age) {
      setMessage("Please fill in all required fields.");
      return;
    }

    setMessage(`Patient ${patient.name} registered successfully!`);

    setPatient({
      name: "",
      age: "",
      gender: "Male",
    });
  };

  return (
    <div className="app">

      {/* Header */}
      <header className="header">
        <div className="logo">
          <div className="logo-icon">❤</div>
          <div>
            <h1>Community Health</h1>
            <p>AI Powered Health Dashboard</p>
          </div>
        </div>

        <div className="status">
          <span className="status-dot"></span>
          System Online
        </div>
      </header>

      {/* Main Content */}
      <main className="dashboard">

        {/* Welcome Section */}
        <section className="welcome">
          <div>
            <p className="small-title">COMMUNITY HEALTH CENTER</p>
            <h2>Welcome back 👋</h2>
            <p>
              Register and manage patient information securely from one place.
            </p>
          </div>

          <div className="health-icon">
            🏥
          </div>
        </section>

        {/* Statistics */}
        <section className="stats">

          <div className="stat-card">
            <div className="stat-icon blue">👥</div>
            <div>
              <p>Total Patients</p>
              <h3>1,248</h3>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon green">🩺</div>
            <div>
              <p>Today's Visits</p>
              <h3>36</h3>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon purple">📊</div>
            <div>
              <p>Health Reports</p>
              <h3>89</h3>
            </div>
          </div>

        </section>

        {/* Registration Area */}
        <section className="content-grid">

          {/* Form Card */}
          <div className="card registration-card">

            <div className="card-header">
              <div className="section-icon">👤</div>
              <div>
                <h2>Patient Registration</h2>
                <p>Enter the patient's basic information</p>
              </div>
            </div>

            <form onSubmit={handleSubmit}>

              {/* Patient Name */}
              <div className="form-group">
                <label>
                  Patient Name <span>*</span>
                </label>

                <div className="input-wrapper">
                  <span>👤</span>
                  <input
                    type="text"
                    name="name"
                    value={patient.name}
                    onChange={handleChange}
                    placeholder="Enter patient name"
                  />
                </div>
              </div>

              {/* Age */}
              <div className="form-group">
                <label>
                  Age <span>*</span>
                </label>

                <div className="input-wrapper">
                  <span>🎂</span>
                  <input
                    type="number"
                    name="age"
                    value={patient.age}
                    onChange={handleChange}
                    placeholder="Enter age"
                    min="0"
                    max="120"
                  />
                </div>
              </div>

              {/* Gender */}
              <div className="form-group">
                <label>Gender</label>

                <div className="input-wrapper">
                  <span>⚥</span>

                  <select
                    name="gender"
                    value={patient.gender}
                    onChange={handleChange}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Button */}
              <button type="submit" className="save-button">
                <span>＋</span>
                Register Patient
                <span className="arrow">→</span>
              </button>

              {message && (
                <div className="message">
                  {message}
                </div>
              )}

            </form>
          </div>

          {/* Information Card */}
          <div className="card info-card">

            <div className="info-header">
              <div className="section-icon purple-bg">🤖</div>
              <div>
                <h2>AI Health Assistant</h2>
                <p>Smart community health insights</p>
              </div>
            </div>

            <div className="ai-box">
              <div className="ai-circle">✨</div>

              <div>
                <h3>AI-Powered Analytics</h3>
                <p>
                  Analyze community health information and identify
                  important trends using AI.
                </p>
              </div>
            </div>

            <div className="feature">
              <span>✓</span>
              Patient data management
            </div>

            <div className="feature">
              <span>✓</span>
              Health trend analysis
            </div>

            <div className="feature">
              <span>✓</span>
              Community health monitoring
            </div>

          </div>

        </section>

      </main>

      {/* Footer */}
      <footer>
        <p>
          © 2026 Community Health Dashboard
        </p>

        <p>
          Secure • Private • AI Powered
        </p>
      </footer>

    </div>
  );
}

export default App;