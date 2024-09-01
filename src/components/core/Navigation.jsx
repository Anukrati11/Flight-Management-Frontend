import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../images/logo.png';

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
      
      {/* <img src={logo} width={30} alt='FMS Logo' /> */}
        <Link className="navbar-brand" to="/">&nbsp; FMS</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/flights">Flights</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/airports">Airports</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/bookings">Bookings</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/passengers">Passengers</Link> {/* Add link to Passengers */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/schedules">Schedules</Link> {/* Add link to Schedules */}
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/scheduledFlights">Scheduled Flights</Link>
            </li>
            {/* Add more links for other entities */}
          </ul>
        </div>
      </div>
    </nav>

  );
}

export default Navigation;