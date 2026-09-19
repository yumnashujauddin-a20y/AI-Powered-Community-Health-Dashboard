import React, { useState } from "react";

function Prediction() {
  const [patient, setPatient] = useState("");
  const [fever, setFever] = useState("No");
  const [cough, setCough] = useState("No");
  const [headache, setHeadache] = useState("No");
  const [fatigue, setFatigue] = useState("No");
  const [result, setResult] = useState("");

  const predictDisease = () => {
    if (!patient) {
      setResult("Please select a patient.");
      return;
    }

    const symptoms = [
      fever === "Yes",
      cough === "Yes",
      headache === "Yes",
      fatigue === "Yes",
    ].filter(Boolean).length;

    if (symptoms === 0) {
      setResult("Low Risk");
    } else if (symptoms === 1) {
      setResult("Mild Risk");
    } else if (symptoms === 2) {
      setResult("Moderate Risk");
    } else {
      setResult("High Risk");
    }
  };

  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "linear-gradient(135deg, #009688, #16c7b7)",
          borderRadius: "20px",
          padding: "30px",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "25px",
          boxShadow: "0 15px 35px rgba(0, 150, 136, 0.18)",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "11px",
              fontWeight: "bold",
              letterSpacing: "1.5px",
              marginBottom: "8px",
            }}
          >
            AI HEALTH ANALYTICS
          </div>

          <h2
            style={{
              margin: 0,
              fontSize: "28px",
            }}
          >
            AI Disease Prediction
          </h2>

          <p
            style={{
              margin: "8px 0 0",
              fontSize: "13px",
            }}
          >
            Analyze patient symptoms using AI-powered health analytics.
          </p>
        </div>

        <div
          style={{
            width: "75px",
            height: "75px",
            borderRadius: "20px",
            background: "rgba(255,255,255,0.18)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "35px",
          }}
        >
          🤖
        </div>
      </div>

      {/* Main Card */}
      <div
        style={{
          background: "white",
          borderRadius: "20px",
          padding: "30px",
          boxShadow: "0 8px 30px rgba(15,23,42,0.07)",
          border: "1px solid #e5eaf0",
        }}
      >
        {/* Card Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            marginBottom: "25px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "13px",
              background: "#f3e8ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "22px",
            }}
          >
            🤖
          </div>

          <div>
            <h3
              style={{
                margin: 0,
                color: "#0f172a",
                fontSize: "18px",
              }}
            >
              Patient Health Assessment
            </h3>

            <p
              style={{
                margin: "5px 0 0",
                color: "#64748b",
                fontSize: "12px",
              }}
            >
              Select a patient and enter their symptoms.
            </p>
          </div>
        </div>

        {/* Patient */}
        <label
          style={{
            display: "block",
            fontWeight: "700",
            fontSize: "13px",
            marginBottom: "8px",
            color: "#334155",
          }}
        >
          Select Patient *
        </label>

        <select
          value={patient}
          onChange={(e) => setPatient(e.target.value)}
          style={{
            width: "100%",
            height: "48px",
            border: "1px solid #dbe3ea",
            borderRadius: "10px",
            padding: "0 14px",
            fontSize: "13px",
            background: "#f8fafc",
            marginBottom: "25px",
          }}
        >
          <option value="">Select Patient</option>
          <option value="Patient 1">Patient 1</option>
          <option value="Patient 2">Patient 2</option>
          <option value="Patient 3">Patient 3</option>
        </select>

        {/* Symptoms */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "15px",
          }}
        >
          <h3
            style={{
              margin: 0,
              fontSize: "15px",
              color: "#0f172a",
            }}
          >
            Patient Symptoms
          </h3>

          <span
            style={{
              fontSize: "11px",
              color: "#94a3b8",
            }}
          >
            Select Yes or No
          </span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "15px",
          }}
        >
          {/* Fever */}
          <div
            style={{
              padding: "18px",
              background: "#f8fafc",
              border: "1px solid #e5eaf0",
              borderRadius: "12px",
            }}
          >
            <label
              style={{
                display: "block",
                fontWeight: "700",
                fontSize: "13px",
                marginBottom: "9px",
              }}
            >
              🌡️ Fever
            </label>

            <select
              value={fever}
              onChange={(e) => setFever(e.target.value)}
              style={{
                width: "100%",
                height: "40px",
                borderRadius: "8px",
                border: "1px solid #dbe3ea",
                padding: "0 10px",
              }}
            >
              <option>No</option>
              <option>Yes</option>
            </select>
          </div>

          {/* Cough */}
          <div
            style={{
              padding: "18px",
              background: "#f8fafc",
              border: "1px solid #e5eaf0",
              borderRadius: "12px",
            }}
          >
            <label
              style={{
                display: "block",
                fontWeight: "700",
                fontSize: "13px",
                marginBottom: "9px",
              }}
            >
              😷 Cough
            </label>

            <select
              value={cough}
              onChange={(e) => setCough(e.target.value)}
              style={{
                width: "100%",
                height: "40px",
                borderRadius: "8px",
                border: "1px solid #dbe3ea",
                padding: "0 10px",
              }}
            >
              <option>No</option>
              <option>Yes</option>
            </select>
          </div>

          {/* Headache */}
          <div
            style={{
              padding: "18px",
              background: "#f8fafc",
              border: "1px solid #e5eaf0",
              borderRadius: "12px",
            }}
          >
            <label
              style={{
                display: "block",
                fontWeight: "700",
                fontSize: "13px",
                marginBottom: "9px",
              }}
            >
              🤕 Headache
            </label>

            <select
              value={headache}
              onChange={(e) => setHeadache(e.target.value)}
              style={{
                width: "100%",
                height: "40px",
                borderRadius: "8px",
                border: "1px solid #dbe3ea",
                padding: "0 10px",
              }}
            >
              <option>No</option>
              <option>Yes</option>
            </select>
          </div>

          {/* Fatigue */}
          <div
            style={{
              padding: "18px",
              background: "#f8fafc",
              border: "1px solid #e5eaf0",
              borderRadius: "12px",
            }}
          >
            <label
              style={{
                display: "block",
                fontWeight: "700",
                fontSize: "13px",
                marginBottom: "9px",
              }}
            >
              😴 Fatigue
            </label>

            <select
              value={fatigue}
              onChange={(e) => setFatigue(e.target.value)}
              style={{
                width: "100%",
                height: "40px",
                borderRadius: "8px",
                border: "1px solid #dbe3ea",
                padding: "0 10px",
              }}
            >
              <option>No</option>
              <option>Yes</option>
            </select>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={predictDisease}
          style={{
            width: "100%",
            height: "54px",
            marginTop: "25px",
            border: "none",
            borderRadius: "12px",
            background: "linear-gradient(135deg, #00bfa6, #008f83)",
            color: "white",
            fontSize: "14px",
            fontWeight: "700",
            cursor: "pointer",
            boxShadow: "0 10px 20px rgba(0,191,166,0.22)",
          }}
        >
          🤖 Predict Disease →
        </button>

        {/* Result */}
        <div
          style={{
            marginTop: "22px",
            padding: "20px",
            borderRadius: "13px",
            background: "linear-gradient(135deg, #f0fdfa, #ecfeff)",
            border: "1px solid #b8ebe4",
          }}
        >
          <div
            style={{
              color: "#0f766e",
              fontWeight: "700",
              fontSize: "12px",
            }}
          >
            ✨ Prediction Result
          </div>

          <div
            style={{
              marginTop: "7px",
              fontSize: "22px",
              fontWeight: "800",
              color: "#0f172a",
            }}
          >
            {result || "No prediction yet"}
          </div>

          <p
            style={{
              margin: "6px 0 0",
              fontSize: "11px",
              color: "#64748b",
            }}
          >
            Select a patient, enter symptoms, and click
            Predict Disease.
          </p>
        </div>

        {/* Notice */}
        <div
          style={{
            marginTop: "18px",
            padding: "15px",
            borderRadius: "11px",
            background: "#faf5ff",
            border: "1px solid #eadcff",
            display: "flex",
            gap: "10px",
          }}
        >
          <div>✨</div>

          <div>
            <strong
              style={{
                fontSize: "11px",
                color: "#581c87",
              }}
            >
              AI Health Insight
            </strong>

            <p
              style={{
                margin: "4px 0 0",
                fontSize: "10px",
                lineHeight: "1.5",
                color: "#7c3aed",
              }}
            >
              This demonstration provides an AI-assisted
              risk assessment and should not replace
              professional medical evaluation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prediction;