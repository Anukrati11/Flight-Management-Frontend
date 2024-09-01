import React from "react"
import { getSchedules, deleteSchedule } from '../../services/scheduleService';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const SchedulesList = () => {
    const [schedules, setSchedules] = useState([]);
 
    useEffect(() => {
        const fetchData = async () => {
            const result = await getSchedules();
            setSchedules(result);
        };
        fetchData();
    }, []);
 
    const handleDelete = async (id) => {
        console.log("handleDelete: ", id);
        await deleteSchedule(id);
        setSchedules(schedules.filter(schedule => schedule.id !== id));
    };

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Schedules</h2>
                <Link to="/schedules/new" className="btn btn-primary mb-3">
                    Add Schedule
                </Link>
            </div>
 
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Departure Time</th>
                            <th>Arrival Time</th>
                            <th>Departure Airport</th>
                            <th>Arrival Airport</th>
                            <th className="text-end">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {schedules.map((schedule, index) => {
                            return (
                                <tr key={schedule.id}>
                                    <td>{schedule.departureTime}</td>
                                    <td>{schedule.arrivalTime}</td>
                                    <td>{schedule.departureAirport.name}</td>
                                    <td>{schedule.arrivalAirport.name}</td>
                                    <td className="text-end">
                                        { <Link to={`/schedules/${schedule.id}`} className="btn btn-sm btn-outline-primary me-2">
                                            Edit
                                        </Link> }
                                        <button
                                            onClick={() => {
                                                handleDelete(schedule.id);
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

export default SchedulesList