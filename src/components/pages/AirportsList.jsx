import React from "react"
import { getAirports, deleteAirport } from '../../services/airportService';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const AirportsList = () => {
    const [airports, setAirports] = useState([]);
 
    useEffect(() => {
        const fetchData = async () => {
            const result = await getAirports();
            setAirports(result);
        };
        fetchData();
    }, []);
 
    const handleDelete = async (id) => {
        console.log("handleDelete: ", id);
        await deleteAirport(id);
        setAirports(airports.filter(airport => airport.id !== id));
    };

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Airports</h2>
                <Link to="/airports/new" className="btn btn-primary mb-3">
                    Add Airport
                </Link>
            </div>
 
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>City</th>
                            <th>Country</th>
                            <th className="text-end">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {airports.map((airport, index) => {
                            return (
                                <tr key={airport.id}>
                                    <td>{airport.name}</td>
                                    <td>{airport.city}</td>
                                    <td>{airport.country}</td>
                                    <td className="text-end">
                                        { <Link to={`/airports/${airport.id}`} className="btn btn-sm btn-outline-primary me-2">
                                            Edit
                                        </Link> }
                                        <button
                                            onClick={() => {
                                                handleDelete(airport.id);
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

export default AirportsList