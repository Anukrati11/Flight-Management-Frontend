import axios from 'axios';

const API_URL = 'http://localhost:8080/api/passenger';

export const getPassengers = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const getPassenger = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

export const createPassenger = async (passenger) => {
    const response = await axios.post(API_URL, passenger);
    return response.data;
};

export const updatePassenger = async (passenger) => {
    const response = await axios.put(`${API_URL}/${passenger.id}`, passenger);
    return response.data;
};

export const deletePassenger = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
};
