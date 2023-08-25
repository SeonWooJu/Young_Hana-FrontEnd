import axios from "axios";
import {Cookies} from "react-cookie";

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_SERVER_URL,
    timeout: 100000,
})

instance.interceptors.request.use(
    (config) => {
        const accessToken = new Cookies().get("access_token");

        config.headers['Content-Type'] = 'application/json';
        config.headers['Authorization'] = `Bearer ${accessToken}`;

        return config;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }
);

export default instance;