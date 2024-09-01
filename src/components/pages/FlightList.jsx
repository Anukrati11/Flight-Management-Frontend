import React from "react"
import { getFlights, deleteFlight } from '../../services/flightService';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function FlightList() {
    const [flights, setFlights] = useState([]);
 
    useEffect(() => {
        const fetchData = async () => {
            const result = await getFlights();
            setFlights(result);
        };
        fetchData();
    }, []);
 
    const handleDelete = async (id) => {
        console.log("handleDelete: ", id);
        await deleteFlight(id);
        setFlights(flights.filter(flight => flight.id !== id));
    };
 
    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Flights</h2>
                <Link to="/flights/new" className="btn btn-primary mb-3">
                    Add Flight
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
                        {flights.map((flight, index) => {
                            //console.log("flight: ", flight, index);
                            return (
 
                                <tr key={flight.id}>
                                    <td>{flight.carrierName}</td>
                                    <td>{flight.flightModel}</td>
                                    <td>{flight.seatCapacity}</td>
                                    <td className="text-end">
                                        { <Link to={`/flights/${flight.id}`} className="btn btn-sm btn-outline-primary me-2">
                                            Edit
                                        </Link> }
                                        <button
                                            onClick={() => {
                                                handleDelete(flight.id);
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
 
export default FlightList;