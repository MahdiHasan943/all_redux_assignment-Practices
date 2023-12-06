import axios from "axios";

let URL;
switch (import.meta.env.VITE_REACT_APP_ENVIRONMENT) {
    case "DEVELOPMENT":
        URL = "http://localhost:5000/";
        break;
    case "PRODUCTION":
        URL = "http://localhost:3000/";
        break;
    default:
        URL = "http://localhost:5000/";
}

export const instance = axios.create({
    baseURL: URL,
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});
