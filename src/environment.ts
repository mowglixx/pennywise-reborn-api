export const NODE_ENV = process.env.NODE_ENV || "production";

export const FRONTEND_URLS = JSON.parse(process.env.FRONTEND_URLS || '[]') || ["http://localhost:3000", "http://127.0.0.1:3000"]

export const API_PROTOCOL = process.env.API_SERVER_PROTOCOL || "http";
export const API_HOST = "localhost"; // best left as localhost for use with a reverse proxy
export const API_PORT = Number(process.env.API_SERVER_PORT || "9000");
export const API_URL = `${API_PROTOCOL}://${API_HOST}${API_PORT == 80 && API_PROTOCOL == "http" || API_PORT == 443 && API_PROTOCOL == "https" ? "" : `:${API_PORT}`}/api`;
export const API_EXTERNAL_URL = process.env.API_EXTERNAL_URL || API_URL

export const DB_URL = process.env.DB_URL

const ENV = {
    NODE_ENV,
    FRONTEND_URLS,
    API_PROTOCOL,
    API_HOST,
    API_PORT,
    API_URL,
    API_EXTERNAL_URL,
    DB_URL,
    DB_CONNECTED: false
};

export default ENV;