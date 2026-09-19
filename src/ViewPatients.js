import React from "react";
import "./ViewPatients.css";

function ViewPatients() {
  // Keep your existing patient state/data here if you already have it.
  const patients = [
    {
      id: 2,
      name: "Test Patient",
      age: 14,
      gender: "Male",
      prediction: "Healthy",
    },
    {
      id: 3,
      name: "yumna",
      age: 20,
      gender: "Female",
      prediction: "Healthy",
    },
    {
      id: 4,
      name: "Patient",
      age: 0,
      gender: "Male",
      prediction: "Healthy",
    },
    {
      id: 5,
      name: "yumna",
      age: 20,
      gender: "Female",
      prediction: "Common Cold",
    },
    {
      id: 6,
      name: "nh",
      age: 43,
      gender: "Male",
      prediction: "COVID",
    },
    {
      id: 7,
      name: "Anchal patel",
      age: 20,
      gender: "Female",
      prediction: "Healthy",
    },
  ];

  const handleEdit = (patient) => {
    alert(`Edit patient: ${patient.name}`);
  };

  const handleDelete = (id) => {
    alert(`Delete patient ID: ${id}`);
  };

  return (
    <div className="patients-page">

      {/* Page Header */}
      <div className="patients-header">
        <div>
          <span className="page-label">PATIENT MANAGEMENT</span>

          <h1>
            Patient List
          </h1>

          <p>
            View and manage registered community patients
          </p>
        </div>

        <div className="header-icon">
          👥
        </div>
      </div>

      {/* Statistics */}
      <div className="patient-stats">

        <div className="stat-card">
          <div className="stat-icon blue">
            👥
          </div>

          <div>
            <span>Total Patients</span>
            <strong>{patients.length}</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon green">
            💚
          </div>

          <div>
            <span>Healthy</span>

            <strong>
              {
                patients.filter(
                  (p) => p.prediction === "Healthy"
                ).length
              }
            </strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon orange">
            ⚠️
          </div>

          <div>
            <span>Health Risks</span>

            <strong>
              {
                patients.filter(
                  (p) => p.prediction !== "Healthy"
                ).length
              }
            </strong>
          </div>
        </div>

      </div>

      {/* Patient List Card */}
      <div className="patients-card">

        <div className="card-top">

          <div>
            <h2>
              👤 Registered Patients
            </h2>

            <p>
              Community healthcare patient records
            </p>
          </div>

          <div className="patient-count">
            {patients.length} Patients
          </div>

        </div>

        {/* Table */}
        <div className="table-wrapper">

          <table className="patients-table">

            <thead>
              <tr>
                <th>ID</th>
                <th>Patient</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Prediction</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {patients.map((patient) => (

                <tr key={patient.id}>

                  <td>
                    <span className="patient-id">
                      #{patient.id}
                    </span>
                  </td>

                  <td>

                    <div className="patient-name">

                      <div className="avatar">
                        {patient.name
                          ? patient.name.charAt(0).toUpperCase()
                          : "P"}
                      </div>

                      <div>
                        <strong>
                          {patient.name || "Unknown"}
                        </strong>

                        <small>
                          Community Patient
                        </small>
                      </div>

                    </div>

                  </td>

                  <td>
                    <span className="age-badge">
                      {patient.age}
                    </span>
                  </td>

                  <td>
                    <span
                      className={
                        patient.gender === "Female"
                          ? "gender female"
                          : "gender male"
                      }
                    >
                      {patient.gender === "Female"
                        ? "♀ Female"
                        : "♂ Male"}
                    </span>
                  </td>

                  <td>

                    <span
                      className={
                        patient.prediction === "Healthy"
                          ? "prediction healthy"
                          : patient.prediction === "COVID"
                          ? "prediction danger"
                          : "prediction warning"
                      }
                    >
                      <span className="status-dot"></span>
                      {patient.prediction}
                    </span>

                  </td>

                  <td>

                    <div className="action-buttons">

                      <button
                        className="edit-btn"
                        onClick={() => handleEdit(patient)}
                      >
                        ✏️ Edit
                      </button>

                      <button
                        className="delete-btn"
                        onClick={() =>
                          handleDelete(patient.id)
                        }
                      >
                        🗑️ Delete
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {/* Bottom */}
        <div className="table-footer">

          <span>
            Showing <strong>{patients.length}</strong> registered patients
          </span>

          <span>
            🔒 Patient information is securely managed
          </span>

        </div>

      </div>

    </div>
  );
}

export default ViewPatients;