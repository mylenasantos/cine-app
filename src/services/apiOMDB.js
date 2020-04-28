import axios from 'axios';


const apiOMDB = axios.create({
    baseURL: 'http://img.omdbapi.com', 
});

export default apiOMDB;