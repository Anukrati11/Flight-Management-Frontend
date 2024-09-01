// src/utils/auth.js
export const getToken = () => {
    return sessionStorage.getItem('token');
};
  