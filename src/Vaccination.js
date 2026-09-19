import React, { useState } from "react";
import "./Vaccination.css";

function Vaccination() {
  const [patient, setPatient] = useState("");
  const [vaccine, setVaccine] = useState("");
  const [dose, setDose] = useState("");
  const [vaccinationDate, setVaccinationDate] = useState("");
  const [nextDueDate, setNextDueDate] = useState("");

  const [vaccinations, setVaccinations] = useState([
    {
      id: 1,
      patient: "Anchal patel",
      vaccine: "COVID",
      dose: "1st",
      vaccinationDate: "2026-08-08",
      nextDueDate: "2026-08-10",
    },
  ]);

  const saveVaccination = () => {
    if (!patient || !vaccine || !dose || !vaccinationDate) {
      alert("Please fill in all vaccination details.");
      return;
    }

    const newVaccination = {
      id: vaccinations.length + 1,
      patient,
      vaccine,
      dose,
      vaccinationDate,
      nextDueDate,
    };

    setVaccinations([
      ...vaccinations,
      newVaccination,
    ]);

    setPatient("");
    setVaccine("");
    setDose("");
    setVaccinationDate("");
    setNextDueDate("");
  };

  return (
    <div className="vaccination-page">

      {/* Hero */}
      <div className="vaccination-hero">

        <div>
          <span className="vaccination-label">
            COMMUNITY HEALTH CENTER
          </span>

          <h1>
            Vaccination Tracking
          </h1>

          <p>
            Manage patient vaccinations and keep track of upcoming doses.
          </p>
        </div>

        <div className="vaccination-hero-icon">
          💉
        </div>

      </div>


      {/* Statistics */}
      <div className="vaccination-stats">

        <div className="vaccination-stat">

          <div className="vaccination-stat-icon blue">
            💉
          </div>

          <div>
            <span>Total Vaccinations</span>
            <strong>{vaccinations.length}</strong>
          </div>

        </div>


        <div className="vaccination-stat">

          <div className="vaccination-stat-icon green">
            👥
          </div>

          <div>
            <span>Vaccinated Patients</span>
            <strong>{vaccinations.length}</strong>
          </div>

        </div>


        <div className="vaccination-stat">

          <div className="vaccination-stat-icon orange">
            📅
          </div>

          <div>
            <span>Upcoming Doses</span>
            <strong>1</strong>
          </div>

        </div>

      </div>


      {/* Registration Card */}
      <div className="vaccination-card">

        <div className="vaccination-card-header">

          <div className="vaccination-title-icon">
            💉
          </div>

          <div>
            <h2>
              Record Vaccination
            </h2>

            <p>
              Enter patient vaccination information
            </p>
          </div>

        </div>


        <div className="vaccination-form">

          {/* Patient */}
          <div className="form-group">

            <label>
              Patient Name <span>*</span>
            </label>

            <div className="input-wrapper">

              <span>👤</span>

              <input
                type="text"
                placeholder="Enter patient name"
                value={patient}
                onChange={(e) =>
                  setPatient(e.target.value)
                }
              />

            </div>

          </div>


          {/* Vaccine */}
          <div className="form-group">

            <label>
              Vaccine Name <span>*</span>
            </label>

            <div className="input-wrapper">

              <span>💉</span>

              <select
                value={vaccine}
                onChange={(e) =>
                  setVaccine(e.target.value)
                }
              >
                <option value="">
                  Select vaccine
                </option>

                <option value="COVID">
                  COVID-19
                </option>

                <option value="Influenza">
                  Influenza
                </option>

                <option value="Hepatitis B">
                  Hepatitis B
                </option>

                <option value="MMR">
                  MMR
                </option>

                <option value="Polio">
                  Polio
                </option>

                <option value="Tetanus">
                  Tetanus
                </option>

              </select>

            </div>

          </div>


          {/* Dose */}
          <div className="form-group">

            <label>
              Dose <span>*</span>
            </label>

            <div className="input-wrapper">

              <span>🔢</span>

              <select
                value={dose}
                onChange={(e) =>
                  setDose(e.target.value)
                }
              >

                <option value="">
                  Select dose
                </option>

                <option value="1st">
                  1st Dose
                </option>

                <option value="2nd">
                  2nd Dose
                </option>

                <option value="Booster">
                  Booster
                </option>

              </select>

            </div>

          </div>


          {/* Vaccination Date */}
          <div className="form-group">

            <label>
              Vaccination Date <span>*</span>
            </label>

            <div className="input-wrapper">

              <span>📅</span>

              <input
                type="date"
                value={vaccinationDate}
                onChange={(e) =>
                  setVaccinationDate(e.target.value)
                }
              />

            </div>

          </div>


          {/* Next Due Date */}
          <div className="form-group">

            <label>
              Next Due Date
            </label>

            <div className="input-wrapper">

              <span>📆</span>

              <input
                type="date"
                value={nextDueDate}
                onChange={(e) =>
                  setNextDueDate(e.target.value)
                }
              />

            </div>

          </div>

        </div>


        {/* Save Button */}
        <button
          className="save-vaccination"
          onClick={saveVaccination}
        >
          💉 Save Vaccination
        </button>

      </div>


      {/* Vaccination History */}
      <div className="vaccination-history">

        <div className="history-header">

          <div>
            <h2>
              📋 Vaccination History
            </h2>

            <p>
              Recently recorded vaccinations
            </p>
          </div>

          <span className="record-count">
            {vaccinations.length} Records
          </span>

        </div>


        <div className="vaccination-table-wrapper">

          <table className="vaccination-table">

            <thead>
              <tr>
                <th>ID</th>
                <th>Patient</th>
                <th>Vaccine</th>
                <th>Dose</th>
                <th>Vaccination Date</th>
                <th>Next Due Date</th>
              </tr>
            </thead>

            <tbody>

              {vaccinations.map((item) => (

                <tr key={item.id}>

                  <td>
                    <span className="vaccination-id">
                      #{item.id}
                    </span>
                  </td>

                  <td>

                    <div className="vaccination-patient">

                      <div className="patient-avatar">
                        {item.patient.charAt(0).toUpperCase()}
                      </div>

                      <strong>
                        {item.patient}
                      </strong>

                    </div>

                  </td>

                  <td>
                    <span className="vaccine-badge">
                      💉 {item.vaccine}
                    </span>
                  </td>

                  <td>
                    <span className="dose-badge">
                      {item.dose}
                    </span>
                  </td>

                  <td>
                    📅 {item.vaccinationDate}
                  </td>

                  <td>
                    <span className="due-date">
                      📆 {item.nextDueDate || "Not scheduled"}
                    </span>
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>


      {/* Notice */}
      <div className="vaccination-notice">

        <div className="vaccination-notice-icon">
          🔒
        </div>

        <div>
          <strong>
            Vaccination Information
          </strong>

          <p>
            Keep vaccination records accurate and up to date.
            Always follow official healthcare vaccination guidance.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Vaccination;