import axios from 'axios';


const apiOMDB = axios.create({
    baseURL: 'http://www.omdbapi.com', 
});

export default apiOMDB;