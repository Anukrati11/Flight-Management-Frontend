import axios from 'axios';

const API_URL = 'http://localhost:8080/api/airports';
//const API_URL = '/airports';

export const getAirports = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const getAirport = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

export const createAirport = async (airport) => {
    const response = await axios.post(API_URL, airport);
    return response.data;
};

export const updateAirport = async (airport) => {
    const response = await axios.put(`${API_URL}/${airport.id}`, airport);
    return response.data;
};

export const deleteAirport = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
};
