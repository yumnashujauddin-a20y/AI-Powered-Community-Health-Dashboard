import React, { useState } from "react";
import "./Dashboard.css";

import Prediction from "./Prediction";
import PatientRegistration from "./PatientRegistration";
import ViewPatients from "./ViewPatients";
import Charts from "./Charts";
import CommunityMap from "./CommunityMap";
import DownloadReport from "./DownloadReport";
import HospitalResources from "./HospitalResources";
import Vaccination from "./Vaccination";

function Dashboard() {
  const [page, setPage] = useState("dashboard");

  const renderPageTitle = () => {
    switch (page) {
      case "patient":
        return "Patient Registration";
      case "prediction":
        return "AI Disease Prediction";
      case "view":
        return "View Patients";
      case "charts":
        return "Health Analytics";
      case "map":
        return "Community Health Map";
      case "report":
        return "Health Reports";
      case "resources":
        return "Hospital Resources";
      case "vaccination":
        return "Vaccination";
      default:
        return "AI Powered Community Health Dashboard";
    }
  };

  return (
    <div className="container">

      {/* SIDEBAR */}
      <aside className="sidebar">

        <div className="brand">

          <div className="brand-icon">
            ♥
          </div>

          <div className="brand-text">
            <h2>Community Health</h2>
            <p>AI Powered Health Dashboard</p>
          </div>

        </div>


        <div className="menu-label">
          MAIN MENU
        </div>


        <button
          className={page === "dashboard" ? "menu-button active" : "menu-button"}
          onClick={() => setPage("dashboard")}
        >
          🏠 Dashboard
        </button>


        <button
          className={page === "patient" ? "menu-button active" : "menu-button"}
          onClick={() => setPage("patient")}
        >
          📋 Patient Registration
        </button>


        <button
          className={page === "prediction" ? "menu-button active" : "menu-button"}
          onClick={() => setPage("prediction")}
        >
          🤖 Disease Prediction
        </button>


        <button
          className={page === "view" ? "menu-button active" : "menu-button"}
          onClick={() => setPage("view")}
        >
          👥 View Patients
        </button>


        <div className="menu-label">
          HEALTH SERVICES
        </div>


        <button
          className={page === "charts" ? "menu-button active" : "menu-button"}
          onClick={() => setPage("charts")}
        >
          📊 Health Analytics
        </button>


        <button
          className={page === "map" ? "menu-button active" : "menu-button"}
          onClick={() => setPage("map")}
        >
          🗺️ Community Map
        </button>


        <button
          className={page === "report" ? "menu-button active" : "menu-button"}
          onClick={() => setPage("report")}
        >
          📄 PDF Reports
        </button>


        <button
          className={page === "resources" ? "menu-button active" : "menu-button"}
          onClick={() => setPage("resources")}
        >
          🏥 Hospital Resources
        </button>


        <button
          className={page === "vaccination" ? "menu-button active" : "menu-button"}
          onClick={() => setPage("vaccination")}
        >
          💉 Vaccination
        </button>


        <div className="sidebar-bottom">

          <div className="online">

            <span className="online-dot"></span>

            System Online

          </div>

          <div className="admin">

            <div className="admin-avatar">
              A
            </div>

            <div>
              <strong>Health Admin</strong>
              <small>Administrator</small>
            </div>

          </div>

        </div>

      </aside>


      {/* MAIN */}
      <section className="main-content">

        {/* NAVBAR */}
        <header className="navbar">

          <div>
            <h1>{renderPageTitle()}</h1>

            <p>
              Community healthcare management system
            </p>
          </div>


          <div className="navbar-right">

            <div className="system-status">
              <span></span>
              System Online
            </div>

            <div className="profile">
              👤
            </div>

          </div>

        </header>


        {/* CONTENT */}
        <main className="page-content">

          {/* DASHBOARD HOME */}
          {page === "dashboard" && (

            <div className="dashboard-home">

              <section className="welcome">

                <div>

                  <div className="welcome-label">
                    COMMUNITY HEALTH CENTER
                  </div>

                  <h2>
                    Welcome back 👋
                  </h2>

                  <p>
                    Manage patients, monitor community health,
                    and access AI-powered healthcare insights.
                  </p>

                </div>

                <div className="welcome-icon">
                  🏥
                </div>

              </section>


              {/* STATISTICS */}
              <section className="stats">

                <div className="stat-card">

                  <div className="stat-icon blue">
                    👥
                  </div>

                  <div>
                    <span>Total Patients</span>
                    <strong>120</strong>
                  </div>

                </div>


                <div className="stat-card">

                  <div className="stat-icon green">
                    🩺
                  </div>

                  <div>
                    <span>Healthy Patients</span>
                    <strong>90</strong>
                  </div>

                </div>


                <div className="stat-card">

                  <div className="stat-icon red">
                    ⚠️
                  </div>

                  <div>
                    <span>Disease Risk</span>
                    <strong>30</strong>
                  </div>

                </div>


                <div className="stat-card">

                  <div className="stat-icon orange">
                    📄
                  </div>

                  <div>
                    <span>Health Reports</span>
                    <strong>15</strong>
                  </div>

                </div>

              </section>


              {/* QUICK ACTIONS */}
              <section className="dashboard-grid">

                <div className="dashboard-card">

                  <div className="dashboard-card-header">

                    <div className="card-heading-icon">
                      👤
                    </div>

                    <div>
                      <h3>Patient Management</h3>
                      <p>Manage community patients</p>
                    </div>

                  </div>


                  <button
                    className="action-button"
                    onClick={() => setPage("patient")}
                  >
                    Register New Patient →
                  </button>


                  <button
                    className="secondary-button"
                    onClick={() => setPage("view")}
                  >
                    View All Patients
                  </button>

                </div>


                <div className="dashboard-card">

                  <div className="dashboard-card-header">

                    <div className="card-heading-icon purple">
                      🤖
                    </div>

                    <div>
                      <h3>AI Health Assistant</h3>
                      <p>Analyze patient symptoms</p>
                    </div>

                  </div>


                  <div className="ai-message">

                    <span>✨</span>

                    <div>
                      <strong>
                        AI Disease Prediction
                      </strong>

                      <p>
                        Use patient symptoms to generate
                        an AI-assisted health assessment.
                      </p>
                    </div>

                  </div>


                  <button
                    className="action-button"
                    onClick={() => setPage("prediction")}
                  >
                    Open AI Prediction →
                  </button>

                </div>

              </section>

            </div>

          )}


          {/* OTHER PAGES */}

          {page === "patient" && (
            <PatientRegistration />
          )}

          {page === "prediction" && (
            <Prediction />
          )}

          {page === "view" && (
            <ViewPatients />
          )}

          {page === "charts" && (
            <Charts />
          )}

          {page === "map" && (
            <CommunityMap />
          )}

          {page === "report" && (
            <DownloadReport />
          )}

          {page === "resources" && (
            <HospitalResources />
          )}

          {page === "vaccination" && (
            <Vaccination />
          )}

        </main>

      </section>

    </div>
  );
}

export default Dashboard;