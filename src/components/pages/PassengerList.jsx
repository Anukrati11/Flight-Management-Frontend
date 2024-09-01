import React from "react"
import { getPassengers, deletePassenger } from '../../services/passengerService';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const PassengersList = () => {
    const [passengers, setPassengers] = useState([]);
 
    useEffect(() => {
        const fetchData = async () => {
            const result = await getPassengers();
            setPassengers(result);
        };
        fetchData();
    }, []);
 
    const handleDelete = async (id) => {
        console.log("handleDelete: ", id);
        await deletePassenger(id);
        setPassengers(passengers.filter(passenger => passenger.id !== id));
    };

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Passengers</h2>
                <Link to="/passengers/new" className="btn btn-primary mb-3">
                    Add Passenger
                </Link>
            </div>
 
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th className="text-end">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {passengers.map((passenger, index) => {
                            return (
                                <tr key={passenger.id}>
                                    <td>{passenger.firstName} {passenger.lastName}</td>
                                    <td>{passenger.email}</td>
                                    <td className="text-end">
                                        { <Link to={`/passengers/${passenger.id}`} className="btn btn-sm btn-outline-primary me-2">
                                            Edit
                                        </Link> }
                                        <button
                                            onClick={() => {
                                                handleDelete(passenger.id);
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

export default PassengersList