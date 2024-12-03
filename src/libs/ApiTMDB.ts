import axios from "axios";

const ApiTMDB = axios.create({
    baseURL: process.env.NEXT_PUBLIC_URL_API,
    withCredentials: true,
});

export default ApiTMDB;