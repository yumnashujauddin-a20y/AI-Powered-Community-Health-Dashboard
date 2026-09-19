// import React, { useState } from "react";
// import Login from "./Login";
// import Dashboard from "./Dashboard";
// import PatientRegistration from "./PatientRegistration";
// import Prediction from "./Prediction";

// function App() {
//   const [page, setPage] = useState("home");

//   if (page === "login") {
//     return <Login onBack={() => setPage("home")} />;
//   }

//   if (page === "patient") {
//     return <PatientRegistration onBack={() => setPage("home")} />;
//   }

//   if (page === "prediction") {
//     return <Prediction onBack={() => setPage("home")} />;
//   }

//   if (page === "dashboard") {
//     return <Dashboard onBack={() => setPage("home")} />;
//   }

//   return (
//     <div style={{ textAlign: "center", marginTop: "40px" }}>
//       <h1>AI Powered Community Health Dashboard</h1>

//       <button onClick={() => setPage("login")}>
//         Login
//       </button>

//       <br /><br />

//       <button onClick={() => setPage("patient")}>
//         Patient Registration
//       </button>

//       <br /><br />

//       <button onClick={() => setPage("prediction")}>
//         Disease Prediction
//       </button>

//       <br /><br />

//       <button onClick={() => setPage("dashboard")}>
//         Dashboard
//       </button>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <>
      {loggedIn ? (
        <Dashboard />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </>
  );
}

export default App;