# 🏥 AI-Powered Community Health Dashboard

<p align="center">
  <strong>A modern web-based healthcare management and community health analytics dashboard</strong>
</p>

<p align="center">
  Patient Registration • Disease Prediction • Health Analytics • Vaccination Tracking • Hospital Resources • Reports
</p>

---

## 📌 Overview

The **AI-Powered Community Health Dashboard** is a web-based healthcare management system designed to help healthcare administrators and community health workers manage patient information, monitor health conditions, analyze community health data, track vaccinations, manage hospital resources, and generate reports from a centralized dashboard.

The application provides a clean and user-friendly interface for managing healthcare-related information and presenting important community health insights.

---

## ✨ Features

### 👤 Patient Registration
- Register new patients
- Store patient name, age, and gender
- Maintain patient records
- Easy-to-use registration interface

### 🤖 AI Disease Prediction
- Select a registered patient
- Enter common symptoms
- Analyze symptoms
- Display predicted health condition
- Designed for future integration with an ML/AI prediction model

### 👥 Patient Management
- View registered patients
- Display patient ID, name, age, gender, and prediction
- Edit patient information
- Delete patient records

### 📊 Health Analytics
- Community health statistics
- Healthy vs disease-risk visualization
- Patient distribution charts
- Health summary cards
- Interactive data visualization

### 🗺️ Community Health Map
- Community health information visualization
- Designed for displaying geographic health trends
- Can be extended with real map and location data

### 📄 PDF Health Reports
- Generate patient health reports
- Download healthcare reports
- Centralized reporting interface

### 🏥 Hospital Resource Management
- Track total hospital beds
- Monitor available beds
- Track doctors
- Track nurses
- Provides a centralized resource overview

### 💉 Vaccination Tracking
- Register vaccination information
- Store patient and vaccine details
- Track dose information
- Record vaccination dates
- Track next vaccination due dates

### 🔐 Login System
- Healthcare dashboard login interface
- Username and password authentication UI
- Secure-system themed interface
- Ready for backend authentication integration

---

## 🖥️ Dashboard Modules

The application contains the following major modules:

| Module | Description |
|---|---|
| 🏠 Dashboard | Community health overview and statistics |
| 📋 Patient Registration | Register and manage patient information |
| 🤖 Disease Prediction | Analyze symptoms and predict possible conditions |
| 👥 View Patients | View, edit, and delete patient records |
| 📈 Health Analytics | Visualize community health statistics |
| 🗺️ Community Map | Display community health information geographically |
| 📑 PDF Reports | Generate and download health reports |
| 🏥 Hospital Resources | Monitor hospital resources |
| 💉 Vaccination | Track vaccination records |

---

## 🎨 User Interface

The dashboard uses a modern healthcare-inspired design featuring:

- Responsive layout
- Sidebar navigation
- Healthcare-themed color palette
- Interactive cards
- Data visualization
- Clean forms
- Status indicators
- Responsive components
- Modern dashboard styling

---

## 🛠️ Technologies Used

### Frontend

- **React.js**
- **JavaScript**
- **HTML5**
- **CSS3**
- **Recharts**
- **React Components**

### Development Tools

- **Node.js**
- **npm**
- **Git**
- **GitHub**
- **Visual Studio Code**

---

## 📁 Project Structure

```text
AI-Powered-Community-Health-Dashboard/
│
├── frontend/
│   │
│   ├── public/
│   │
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── Dashboard.js
│   │   ├── Dashboard.css
│   │   │
│   │   ├── Login.js
│   │   ├── Login.css
│   │   │
│   │   ├── PatientRegistration.js
│   │   ├── Prediction.js
│   │   │
│   │   ├── ViewPatients.js
│   │   ├── ViewPatients.css
│   │   │
│   │   ├── Charts.js
│   │   ├── Charts.css
│   │   │
│   │   ├── CommunityMap.js
│   │   ├── DownloadReport.js
│   │   │
│   │   ├── HospitalResources.js
│   │   ├── HospitalResources.css
│   │   │
│   │   ├── Vaccination.js
│   │   ├── Vaccination.css
│   │   │
│   │   └── index.js
│   │
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
└── README.md
