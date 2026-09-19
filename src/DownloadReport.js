import React from "react";
import "./DownloadReport.css";

function DownloadReport() {
  const downloadReport = () => {
    // Keep your existing PDF generation code here.
    alert("Patient PDF report is being generated...");
  };

  return (
    <div className="report-page">

      {/* Page Header */}
      <div className="report-hero">

        <div className="report-hero-content">

          <span className="report-label">
            COMMUNITY HEALTH CENTER
          </span>

          <h1>
            Health Reports
          </h1>

          <p>
            Generate, view and download community patient health reports.
          </p>

        </div>

        <div className="report-hero-icon">
          📑
        </div>

      </div>


      {/* Statistics */}
      <div className="report-stats">

        <div className="report-stat-card">

          <div className="report-stat-icon blue">
            📄
          </div>

          <div>
            <span>Available Reports</span>
            <strong>15</strong>
          </div>

        </div>


        <div className="report-stat-card">

          <div className="report-stat-icon green">
            👥
          </div>

          <div>
            <span>Patient Records</span>
            <strong>120</strong>
          </div>

        </div>


        <div className="report-stat-card">

          <div className="report-stat-icon purple">
            📊
          </div>

          <div>
            <span>Health Reports</span>
            <strong>89</strong>
          </div>

        </div>

      </div>


      {/* Main Report Card */}
      <div className="report-card">

        <div className="report-card-header">

          <div className="report-title-icon">
            📄
          </div>

          <div>

            <h2>
              Patient Health Report
            </h2>

            <p>
              Generate a comprehensive PDF report
            </p>

          </div>

        </div>


        {/* Preview */}
        <div className="report-preview">

          <div className="pdf-icon">
            📑
          </div>

          <div className="preview-content">

            <h3>
              Community Health Patient Report
            </h3>

            <p>
              This report contains patient information,
              health predictions, community health statistics
              and important health insights.
            </p>

            <div className="report-details">

              <span>
                👥 Patient Information
              </span>

              <span>
                📊 Health Analytics
              </span>

              <span>
                🤖 AI Predictions
              </span>

              <span>
                📈 Health Statistics
              </span>

            </div>

          </div>

        </div>


        {/* Download Area */}
        <div className="download-section">

          <div>

            <h3>
              Ready to generate your report?
            </h3>

            <p>
              Download a professionally formatted PDF
              containing the latest community health data.
            </p>

          </div>

          <button
            className="download-button"
            onClick={downloadReport}
          >
            <span>⬇️</span>
            Download Patient Report
          </button>

        </div>


        {/* Security Notice */}
        <div className="report-notice">

          <div className="notice-icon">
            🔒
          </div>

          <div>

            <strong>
              Secure Health Information
            </strong>

            <p>
              Patient information is handled securely.
              Only authorized healthcare staff should
              access generated reports.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default DownloadReport;