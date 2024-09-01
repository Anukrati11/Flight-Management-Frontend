// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import FlightList from "./components/pages/FlightList";
// import AirportsList from "./components/pages/AirportsList";
// import FlightEdit from "./components/pages/FlightEdit";
// import React, { useState, useEffect } from 'react';
// import Registration from "./components/pages/Registration";
import LoginForm from "./components/pages/LoginForm";
import AppRouter from "./Router";
import React from 'react';
import { getToken } from './utils/auth';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Home</div>,
//   },
//   // get
//   {
//     path: "/flights",
//     element: <FlightList />,
//   },
//   // Create
//   {
//     path: "/flights/create",
//     element: <div>Flight Create</div>,
//   },
//   // Edit
//   {
//     path: "/flights/edit/:id",
//     element: <FlightEdit />,
//   },
//   // delete
//   {
//     path: "/flights/delete",
//     element: <div>Delete Flight</div>,
//   },
//   {
//     path: "/airports",
//     element: <AirportsList />,
//   },
// ]);

function App() {
  // JSX - Javascript XML
  const PrivateRoute = ({ children }) => {
    return getToken() ? children : <Navigate to="/" />;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
        
    // <div className="App" >
    //     <header className="App-header">
    //       {/* <Registration /> */}
    //       <LoginForm />
       
    //     </header>
    //     <AppRouter />
    // </div>

  );
  

  // const[data, setData] = useState([]);
  // useEffect(() => {
  //   fetch('http://localhost:8080/api/flights')
  //     .then(response=> response.json())
  //     .then(data => setData(data));
  // }, []);

  // return (
  //   <div className="App">
  //     <p>Flight Managements</p>
  //     <RouterProvider router={router} />
  //   </div>
  // );


}

export default App;
