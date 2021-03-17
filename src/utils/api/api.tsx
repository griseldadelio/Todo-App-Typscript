import axios from "axios";
const api = axios.create({
    baseURL: "https://todoapp-2d6a9-default-rtdb.firebaseio.com",
});
export { api };