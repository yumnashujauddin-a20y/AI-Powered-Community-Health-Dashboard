import React from "react";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import "./Charts.css";

const data = [
  {
    name: "Healthy",
    patients: 90
  },
  {
    name: "Disease Risk",
    patients: 30
  }
];

const pieData = [
  {
    name: "Healthy",
    value: 90
  },
  {
    name: "Disease Risk",
    value: 30
  }
];

function Charts() {
  return (
    <div className="analytics-page">

      {/* Page Header */}
      <div className="analytics-header">
        <div>
          <div className="analytics-label">
            HEALTH ANALYTICS
          </div>

          <h1>
            Community Health Analytics
          </h1>

          <p>
            Monitor patient health trends and community risk levels
          </p>
        </div>

        <div className="analytics-status">
          <span></span>
          Live Data
        </div>
      </div>


      {/* Statistics */}
      <div className="analytics-stats">

        <div className="analytics-stat-card">
          <div className="stat-icon patients-icon">
            👥
          </div>

          <div>
            <p>Total Patients</p>
            <h2>120</h2>
            <small>Registered patients</small>
          </div>
        </div>


        <div className="analytics-stat-card">
          <div className="stat-icon healthy-icon">
            ❤️
          </div>

          <div>
            <p>Healthy</p>
            <h2>90</h2>
            <small>75% of patients</small>
          </div>
        </div>


        <div className="analytics-stat-card">
          <div className="stat-icon risk-icon">
            ⚠️
          </div>

          <div>
            <p>Disease Risk</p>
            <h2>30</h2>
            <small>25% of patients</small>
          </div>
        </div>


        <div className="analytics-stat-card">
          <div className="stat-icon report-icon">
            📊
          </div>

          <div>
            <p>Health Reports</p>
            <h2>15</h2>
            <small>Generated reports</small>
          </div>
        </div>

      </div>


      {/* Charts */}
      <div className="charts-grid">

        {/* Bar Chart */}
        <div className="chart-card">

          <div className="chart-card-header">
            <div>
              <h2>Patient Health Overview</h2>
              <p>Healthy vs disease-risk patients</p>
            </div>

            <div className="chart-icon">
              📊
            </div>
          </div>

          <div className="chart-container">

            <ResponsiveContainer
              width="100%"
              height={310}
            >
              <BarChart
                data={data}
                margin={{
                  top: 20,
                  right: 20,
                  left: 0,
                  bottom: 10
                }}
              >

                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                />

                <XAxis
                  dataKey="name"
                  tick={{
                    fontSize: 12
                  }}
                  axisLine={false}
                  tickLine={false}
                />

                <YAxis
                  axisLine={false}
                  tickLine={false}
                  allowDecimals={false}
                />

                <Tooltip
                  cursor={{ opacity: 0.08 }}
                />

                <Bar
                  dataKey="patients"
                  name="Patients"
                  fill="#00b89f"
                  radius={[8, 8, 0, 0]}
                  barSize={70}
                />

              </BarChart>
            </ResponsiveContainer>

          </div>

        </div>


        {/* Pie Chart */}
        <div className="chart-card">

          <div className="chart-card-header">

            <div>
              <h2>Health Distribution</h2>
              <p>Community health status</p>
            </div>

            <div className="chart-icon purple">
              ❤️
            </div>

          </div>

          <div className="pie-container">

            <ResponsiveContainer
              width="100%"
              height={310}
            >

              <PieChart>

                <Pie
                  data={pieData}
                  cx="50%"
                  cy="48%"
                  innerRadius={70}
                  outerRadius={105}
                  paddingAngle={4}
                  dataKey="value"
                >

                  <Cell fill="#00b89f" />
                  <Cell fill="#f97373" />

                </Pie>

                <Tooltip />

                <Legend
                  verticalAlign="bottom"
                  height={35}
                />

              </PieChart>

            </ResponsiveContainer>

            <div className="pie-center">

              <strong>120</strong>

              <span>Patients</span>

            </div>

          </div>

        </div>

      </div>


      {/* Insight Section */}
      <div className="health-insight">

        <div className="insight-icon">
          ✨
        </div>

        <div>

          <h3>
            Community Health Insight
          </h3>

          <p>
            90 patients are currently marked healthy,
            while 30 patients require additional health
            monitoring.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Charts;