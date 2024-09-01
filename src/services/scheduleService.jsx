import axios from 'axios';

const API_URL = 'http://localhost:8080/api/schedule';

export const getSchedules = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const getSchedule = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

export const createSchedule = async (schedule) => {
    const response = await axios.post(API_URL, schedule);
    return response.data;
};

export const updateSchedule = async (schedule) => {
    const response = await axios.put(`${API_URL}/${schedule.id}`, schedule);
    return response.data;
};

export const deleteSchedule = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
};
