import React from "react";
import "./HospitalResources.css";

function HospitalResources() {
  const resources = [
    {
      icon: "🛏️",
      title: "Total Beds",
      value: 120,
      available: 120,
      type: "beds",
      color: "blue",
    },
    {
      icon: "✅",
      title: "Available Beds",
      value: 45,
      available: 45,
      type: "beds",
      color: "green",
    },
    {
      icon: "👨‍⚕️",
      title: "Doctors",
      value: 35,
      available: 35,
      type: "staff",
      color: "purple",
    },
    {
      icon: "👩‍⚕️",
      title: "Nurses",
      value: 60,
      available: 60,
      type: "staff",
      color: "pink",
    },
    {
      icon: "💊",
      title: "Medicine Stock",
      value: "85%",
      available: 85,
      type: "stock",
      color: "orange",
    },
    {
      icon: "🩺",
      title: "Medical Equipment",
      value: "92%",
      available: 92,
      type: "equipment",
      color: "teal",
    },
  ];

  return (
    <div className="resources-page">

      {/* Hero */}
      <div className="resources-hero">

        <div>
          <span className="resources-label">
            COMMUNITY HEALTH CENTER
          </span>

          <h1>
            Hospital Resources
          </h1>

          <p>
            Monitor hospital capacity, staff and essential healthcare resources.
          </p>
        </div>

        <div className="resources-hero-icon">
          🏥
        </div>

      </div>


      {/* Quick Summary */}
      <div className="resource-summary">

        <div className="summary-card">
          <div className="summary-icon blue">
            🛏️
          </div>

          <div>
            <span>Total Capacity</span>
            <strong>120</strong>
            <small>Beds</small>
          </div>
        </div>


        <div className="summary-card">
          <div className="summary-icon green">
            🟢
          </div>

          <div>
            <span>Available Beds</span>
            <strong>45</strong>
            <small>Currently available</small>
          </div>
        </div>


        <div className="summary-card">
          <div className="summary-icon purple">
            👨‍⚕️
          </div>

          <div>
            <span>Medical Staff</span>
            <strong>95</strong>
            <small>Doctors & Nurses</small>
          </div>
        </div>

      </div>


      {/* Resource Section */}
      <div className="resources-card">

        <div className="resources-card-header">

          <div>
            <h2>
              📊 Resource Overview
            </h2>

            <p>
              Current hospital resource availability
            </p>
          </div>

          <div className="online-badge">
            <span></span>
            Live Status
          </div>

        </div>


        <div className="resource-grid">

          {resources.map((resource, index) => {

            let percentage = resource.available;

            if (resource.title === "Available Beds") {
              percentage = (45 / 120) * 100;
            }

            return (
              <div
                className="resource-item"
                key={index}
              >

                <div className="resource-item-top">

                  <div
                    className={`resource-icon ${resource.color}`}
                  >
                    {resource.icon}
                  </div>

                  <div className="resource-info">

                    <h3>
                      {resource.title}
                    </h3>

                    <strong>
                      {resource.value}
                    </strong>

                  </div>

                  <span className="resource-status">
                    Available
                  </span>

                </div>


                {/* Progress */}
                <div className="progress-container">

                  <div className="progress-label">

                    <span>
                      Availability
                    </span>

                    <strong>
                      {Math.round(percentage)}%
                    </strong>

                  </div>

                  <div className="progress-bar">

                    <div
                      className={`progress-fill ${resource.color}`}
                      style={{
                        width: `${percentage}%`,
                      }}
                    ></div>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>


      {/* Bottom Information */}
      <div className="resource-notice">

        <div className="notice-symbol">
          💡
        </div>

        <div>
          <strong>
            Resource Management
          </strong>

          <p>
            Hospital resource information is updated regularly
            to help healthcare staff monitor capacity and availability.
          </p>
        </div>

      </div>

    </div>
  );
}

export default HospitalResources;