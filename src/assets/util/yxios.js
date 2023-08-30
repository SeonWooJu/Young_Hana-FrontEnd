import axios from "axios";
import {Cookies} from "react-cookie";

const yxios = axios.create({
    baseURL: process.env.REACT_APP_API_SERVER_URL,
    timeout: 100000,
})

yxios.interceptors.request.use(
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

yxios.interceptors.response.use(
    (response) => {
        const res = response.data;
        return res;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }
)

export default yxios;