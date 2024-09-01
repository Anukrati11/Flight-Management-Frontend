import React from "react"
import { getScheduledFlights, deleteScheduledFlight } from '../../services/scheduleFlightService';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const ScheduledFlightsList = () => {
    const [scheduledFlights, setScheduledFlights] = useState([]);
 
    useEffect(() => {
        const fetchData = async () => {
            const result = await getScheduledFlights();
            setScheduledFlights(result);
        };
        fetchData();
    }, []);
 
    const handleDelete = async (id) => {
        console.log("handleDelete: ", id);
        await deleteScheduledFlight(id);
        setScheduledFlights(scheduledFlights.filter(scheduleFlight => scheduleFlight.id !== id));
    };

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>ScheduledFlights</h2>
                <Link to="/scheduledFlights/new" className="btn btn-primary mb-3">
                    Add ScheduledFlight
                </Link>
            </div>
 
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Carrier Name</th>
                            <th>Flight Model</th>
                            <th>Available Seats</th>
                            <th className="text-end">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {scheduledFlights.map((scheduleFlight, index) => {
                            return (
                                <tr key={scheduleFlight.id}>
                                    <td>{scheduleFlight.flight.carrierName}</td>
                                    <td>{scheduleFlight.flight.flightModel}</td>
                                    <td>{scheduleFlight.flight.seatCapacity}</td>
                                    <td className="text-end">
                                        { <Link to={`/scheduledFlights/${scheduleFlight.id}`} className="btn btn-sm btn-outline-primary me-2">
                                            Edit
                                        </Link> }
                                        <button
                                            onClick={() => {
                                                handleDelete(scheduleFlight.id);
                                            }}
                                            className="btn btn-sm btn-outline-danger">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ScheduledFlightsList