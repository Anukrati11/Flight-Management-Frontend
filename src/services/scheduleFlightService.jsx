import axios from 'axios';

const API_URL = 'http://localhost:8080/api/scheduledFlight';

export const getScheduledFlights = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const getScheduledFlight = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

export const createScheduledFlight = async (scheduleFlight) => {
    const response = await axios.post(API_URL, scheduleFlight);
    return response.data;
};

export const updateScheduledFlight = async (scheduleFlight) => {
    const response = await axios.put(`${API_URL}/${scheduleFlight.id}`, scheduleFlight);
    return response.data;
};

export const deleteScheduledFlight = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
};
