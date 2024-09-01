import React from "react"
import { getBookings, deleteBooking } from '../../services/bookingService';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const BookingsList = () => {
    const [bookings, setBookings] = useState([]);
 
    useEffect(() => {
        const fetchData = async () => {
            const result = await getBookings();
            setBookings(result);
        };
        fetchData();
    }, []);
 
    const handleDelete = async (id) => {
        console.log("handleDelete: ", id);
        await deleteBooking(id);
        setBookings(bookings.filter(booking => booking.id !== id));
    };

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Bookings</h2>
                <Link to="/bookings/new" className="btn btn-primary mb-3">
                    Add Booking
                </Link>
            </div>
 
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Booking Date</th>
                            <th>Passenger Id</th>
                            <th>Flight ID</th>
                            <th className="text-end">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {console.log(bookings)}
                        
                        {bookings.map((booking, index) => {
                            return (
                                <tr key={booking.id}>
                                    <td>{booking.bookingDate}</td>
                                    <td>{booking.passenger.id}</td>
                                    <td>{booking.scheduledFlight.id}</td>
                                    <td className="text-end">
                                        { <Link to={`/bookings/${booking.id}`} className="btn btn-sm btn-outline-primary me-2">
                                            Edit
                                        </Link> }
                                        <button
                                            onClick={() => {
                                                handleDelete(booking.id);
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

export default BookingsList