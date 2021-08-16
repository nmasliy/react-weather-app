import axios from 'axios';

const API_KEY = 'bc4b5b106eb4f6a33bb5c03f83e1937c';

const instance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',
});

const API = {
    getWeather(city) {
        return instance.get(`weather?q=${city}&appid=${API_KEY}&units=metric`)
        .then(response => {
            console.log(response);
            return response.data;
        })
    }
}

export default API;