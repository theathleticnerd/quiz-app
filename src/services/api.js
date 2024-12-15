import axios from "axios";
// Create an instance of Axios
const api = axios.create({
    baseURL: "https://dummyjson.com",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    }
});
export default api;
