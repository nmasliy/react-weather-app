import axios from "axios";

const API_KEY = 'bc4b5b106eb4f6a33bb5c03f83e1937c';

const instance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/'
});

const API = {
    getWeather(city) {
        return instance
            .get(`weather?q=${city}&appid=${API_KEY}&units=metric&lang=en`)
            .then((response) => {
                return response.data;
            });
    },
    getUserCity() {
        return axios.get('https://api.ipify.org')
            .then(({data}) => data)
            .then(ip => {
                return axios.get(`https://geo.ipify.org/api/v1?apiKey=at_zXucZUJUMQM2jv4zPDkZKqZook3Xw&ipAddress=${ip}`)
                    .then(response => response.data.location.city)
            });
    }
};

export default API;