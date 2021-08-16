import API from "../api/api";

const SET_THEME = "SET-THEME";
const SET_WEATHER_DATA = "SET-WEATHER-DATA";
const SET_CURRENT_CITY = "SET-CURRENT-CITY";
const INITIALIZED_SUCCESS = "INITIALIZED-SUCCESS";

const initialState = {
    themes: {
        oldDark: {
            name: "old-dark",
            styles: {
                primary: "#FFFFFF",
                burger: "#89AFE7",
                toggler: {
                    container: "#89AFE7",
                    circle: "#663C6C",
                },
                background: "#250933",
                appBackground:
                    "linear-gradient(180deg, rgba(1, 9, 85, 0.9) 0%, rgba(148, 8, 151, 0.9) 100%)",
            },
        },
        light: {
            name: "light",
            styles: {
                primary: "#363434",
                burger: "#333232",
                toggler: {
                    container: "#284c54",
                    circle: "#FFFFFF",
                },
                background: "#FFFFFF",
                appBackground:
                    "linear-gradient(180deg, rgba(155, 245, 240, 0.8) 0%, rgba(141, 240, 169, 0.8) 100%)",
            },
        },
        dark: {
            name: "dark",
            styles: {
                primary: "#FFFFFF",
                burger: "#232323",
                toggler: {
                    container: "#232323",
                    circle: "#FFFFFF",
                },
                background: "#232323",
                appBackground:
                    "linear-gradient(180deg, rgba(16, 16, 16, 0.9) 0%, rgba(14, 11, 16, 0.9) 100%)",
            },
        },
    },
    theme: {
        name: "dark",
        styles: {
            primary: "#FFFFFF",
            burger: "#FFFFFF",
            toggler: {
                container: "#232323",
                circle: "#FFFFFF",
            },
            background: "#232323",
            appBackground:
                "linear-gradient(180deg, rgba(16, 16, 16, 0.9) 0%, rgba(14, 11, 16, 0.9) 100%)",
        },
    },
    currentCity: "",
    weather: {
        city: "...",
        status: "...",
        temperature: "...",
        imageCode: "",
    },
    initialized: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_THEME: {
            return {
                ...state,
                theme: action.theme,
            };
        }
        case SET_WEATHER_DATA: {
            return {
                ...state,
                weather: action.weather,
            };
        }
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true,
            };
        }
        case SET_CURRENT_CITY: {
            return {
                ...state,
                currentCity: action.currentCity,
            };
        }
        default:
            return state;
    }
};

export const setTheme = (theme) => {
    return {
        type: SET_THEME,
        theme: theme,
    };
};

const setWeatherData = (data) => {
    return {
        type: SET_WEATHER_DATA,
        weather: { ...data },
    };
};

export const setCurrentCity = (city) => {
    return {
        type: SET_CURRENT_CITY,
        currentCity: city,
    };
};

export const getWeatherData = (city) => {
    return (dispatch) => {
        return API.getWeather(city).then((data) => {
            const weatherData = {
                city: data.name,
                status: data.weather[0].description,
                temperature: data.main.temp,
                imageCode: data.weather[0].icon,
            };
            dispatch(setWeatherData(weatherData));
        });
    };
};

const initializingSuccess = () => ({ type: INITIALIZED_SUCCESS });

export const initializeApp = (city) => {
    return (dispatch) => {
        const promises = [
            dispatch(setCurrentCity(city)),
            dispatch(getWeatherData(city)),
        ];
        Promise.all(promises).then(() => dispatch(initializingSuccess()));
    };
};

export default appReducer;
