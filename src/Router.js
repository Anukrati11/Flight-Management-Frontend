import React from 'react';
import Navigation from './components/core/Navigation';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AirportList from './components/pages/AirportsList';
import AirportForm from './components/pages/AirportForm';
import BookingList from './components/pages/BookingList';
import BookingForm from './components/pages/BookingForm';
import FlightList from './components/pages/FlightList';
import FlightForm from './components/pages/FlightForm';
import PassengerList from './components/pages/PassengerList';
import PassengerForm from './components/pages/PassengerForm';
import ScheduleList from './components/pages/ScheduleList';
import ScheduleForm from './components/pages/ScheduleForm';
import ScheduledFlightList from './components/pages/ScheduledFlightList';
import ScheduledFlightForm from './components/pages/ScheduledFlightForm';

function AppRouter() {
    return (
        <Router>
            <div>
            <Navigation />

                <Routes>
                    <Route path="/" element={<Navigate to="/flights" replace />} />
                    <Route exact path="/flights" element={<FlightList />} />
                    <Route path="/flights/new" element={<FlightForm />} />
                    <Route path="/flights/:id" element={<FlightForm />} />
                    <Route exact path="/airports" element={<AirportList />} />
                    <Route path="/airports/new" element={<AirportForm />} />
                    <Route path="/airports/:id" element={<AirportForm />} />

                    <Route path="/bookings" element={<BookingList />} />
                    <Route path="/bookings/new" element={<BookingForm />} />
                    <Route path="/bookings/:id" element={<BookingForm />} />

                    <Route path="/passengers" element={<PassengerList />} />
                    <Route path="/passengers/new" element={<PassengerForm />} />
                    <Route path="/passengers/:id" element={<PassengerForm />} />

                    <Route path="/schedules" element={<ScheduleList />} />
                    <Route path="/schedules/new" element={<ScheduleForm />} />
                    <Route path="/schedules/:id" element={<ScheduleForm />} />

                    <Route exact path="/scheduledFlights" element={<ScheduledFlightList />} />
                    <Route path="/scheduledFlights/new" element={<ScheduledFlightForm />} />
                    <Route path="/scheduledFlights/:id" element={<ScheduledFlightForm />} /> 

                </Routes>
            </div>
        </Router>
    );
}

export default AppRouter;