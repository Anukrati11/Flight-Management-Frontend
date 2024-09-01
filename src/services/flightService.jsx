import axios from 'axios';

const API_URL = 'http://localhost:8080/api/flights';
//const API_URL = '/flights';

export const getFlights = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const getFlight = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

export const createFlight = async (flight) => {
    const response = await axios.post(API_URL, flight);
    return response.data;
};

export const updateFlight = async (flight) => {
    const response = await axios.put(`${API_URL}/${flight.id}`, flight);
    return response.data;
};

export const deleteFlight = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
};
