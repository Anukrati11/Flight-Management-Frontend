import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getFlight, createFlight, updateFlight } from '../../services/flightService';
 
function FlightForm() {
    const { id } = useParams();
 
    const navigate = useNavigate();
 
    const [flight, setFlight] = useState({
        flightNo: '',
        carrierName: '',
        flightModel: '',
        seatCapacity: 0
    });
 
    useEffect(() => {
        if (id) {
            const fetchData = async () => {
                const result = await getFlight(id);
                setFlight(result);
            };
 
            fetchData();
        }
    }, [id]);
 
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log("handleChange: ", name, value);
        setFlight({ ...flight, [name]: value });
    };
 
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (id) {
                await updateFlight(flight);
            } else {
                await createFlight(flight);
            }
            navigate('/flights');
        } catch (error) {
            console.error('Error submitting flight:', error);
            // Handle error (e.g., show error message to user)
        }
    };
 
    return (
        <div className="container mt-4">
            <h2>{id ? 'Edit Flight' : 'Add Flight'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Flight No:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="flightNo"
                        value={flight.flightNo}
                        onChange={handleChange}
                        disabled={!!id}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Carrier Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="carrierName"
                        value={flight.carrierName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Flight Model:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="flightModel"
                        value={flight.flightModel}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Seat Capacity:</label>
                    <input
                        type="number"
                        className="form-control"
                        name="seatCapacity"
                        value={flight.seatCapacity}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    {id ? 'Update' : 'Create'}
                </button>
            </form>
        </div>
    );
}
 
export default FlightForm;
 