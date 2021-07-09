export const API_URL = 'http://127.0.0.1:8000';

export const axiosconfig = {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
};

export const GOOGLE_SITE_KEY = '#';