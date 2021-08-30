import API from "../api/api";
import { v4 as getUnicalId } from "uuid";

const SET_THEME = 'SET-THEME';
const SET_WEATHER_DATA = 'SET-WEATHER-DATA';
const SET_CURRENT_CITY = 'SET-CURRENT-CITY';
const SET_REQUEST_STATUS = 'SET-REQUEST-STATUS';
const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';
const ADD_CITY = 'ADD-CITY';
const REMOVE_CITY = 'REMOVE-CITY';
const CHECK_IS_SINGLE_CITY = 'CHECK-IS-SINGLE-CITY';

const initialState = {
    themes: {
        light: {
            name: 'light',
            styles: {
                primary: '#363434',
                background: '#FFFFFF',
                appBackground:
                    'linear-gradient(180deg, rgba(155, 245, 240, 0.8) 0%, rgba(141, 240, 169, 0.8) 100%)',
                burger: '#333232',
                shadow: '4px 4px 8px 0px rgba(34, 60, 80, 0.2)',
                toggler: {
                    container: '#284c54',
                    circle: '#FFFFFF',
                },
                input: {
                    color: '#363434',
                    background: '#FFFFFF',
                },
                button: {
                    color: '#FFFFFF',
                    background: '#33cfb2',
                },
                cities: {
                    background: 'rgba(27, 26, 26, 0.15)',
                },
            },
        },
        dark: {
            name: 'dark',
            styles: {
                primary: '#FFFFFF',
                shadow: '4px 4px 8px 0px #320f52',
                background: '#232323',
                burger: '#FFFFFF',
                appBackground:
                    'linear-gradient(180deg, rgba(16, 16, 16, 0.9) 0%, rgba(14, 11, 16, 0.9) 100%)',
                toggler: {
                    container: '#232323',
                    circle: '#FFFFFF',
                },
                cities: {
                    background: 'rgba(27, 26, 26, 0.95)',
                },
                input: {
                    color: '#363434',
                    background: '#FFFFFF',
                },
                button: {
                    color: '#FFFFFF',
                    background: '#4e1390',
                },
            },
        },
    },
    theme: {
        name: 'dark',
        styles: {
            primary: '#FFFFFF',
            burger: '#FFFFFF',
            shadow: '4px 4px 8px 0px #320f52',
            background: '#232323',
            appBackground:
                'linear-gradient(180deg, rgba(16, 16, 16, 0.9) 0%, rgba(14, 11, 16, 0.9) 100%)',
            toggler: {
                container: '#232323',
                circle: '#FFFFFF',
            },
            cities: {
                background: 'rgba(27, 26, 26, 0.95)',
            },
            input: {
                color: '#363434',
                background: '#FFFFFF',
            },
            button: {
                color: '#FFFFFF',
                background: '#4e1390',
            },
        },
    },
    isSingleCity: true,
    currentCity: '',
    weather: {
        city: '...',
        status: '...',
        temperature: '...',
        imageCode: '',
    },
    cities: [],
    initialized: false,
    requestStatus: false,
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
        case ADD_CITY: {
            return {
                ...state,
                cities: [...state.cities, action.city],
            };
        }
        case REMOVE_CITY: {
            return {
                ...state,
                cities: state.cities.filter((city) => {
                    return city.id !== action.id;
                }),
            };
        }
        case CHECK_IS_SINGLE_CITY: {
            return {
                ...state,
                isSingleCity: state.cities.length === 1,
            };
        }
        case SET_REQUEST_STATUS: {
            return {
                ...state,
                requestStatus: action.requestStatus,
            };
        }
        default:
            return state;
    }
};

export const addCity = (name, id = getUnicalId()) => {
    return {
        type: ADD_CITY,
        city: {
            name: name,
            id: id
        },
    };
};

export const pickCity = (city) => {
    return (dispatch) => {
        dispatch(setCurrentCity(city));
        return dispatch(getWeatherData(city));
    };
};

export const getWeatherDataAndAddCity = (city, setSubmitting, setStatus) => {
    return (dispatch) => {
        return API.getWeather(city)
            .then((data) => {
                if (data.cod === 200) {
                    const weatherData = {
                        city: data.name,
                        status: data.weather[0].description,
                        temperature: data.main.temp,
                        imageCode: data.weather[0].icon,
                    };
                    dispatch(setRequestStatus(true));
                    return weatherData;
                }
            })
            .then(weatherData => {
                dispatch(setCurrentCity(city));
                dispatch(setWeatherData(weatherData));
                dispatch(addCity(city));
                dispatch(checkIsSingleCity());
            })
            .catch((e) => {
                dispatch(setRequestStatus(false));
                setStatus('The city does not exist');
            })
            .finally(() => setSubmitting(false))
    };
};

export const removeAndChangeCity = (id, city, currentCity, cities) => {
    return (dispatch) => {
        dispatch(removeCity(id));

        if (currentCity === city) {
            if (currentCity === cities[0].name) dispatch(pickCity(cities[1].name));
            else dispatch(pickCity(cities[0].name));
        }

    }
}

export const removeCity = (id) => {
    return {
        type: REMOVE_CITY,
        id: id,
    };
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

export const getWeatherData = (city) => {
    return (dispatch) => {
        return API.getWeather(city)
            .then((data) => {
                if (data.cod === 200) {
                    const weatherData = {
                        city: data.name,
                        status: data.weather[0].description,
                        temperature: data.main.temp,
                        imageCode: data.weather[0].icon,
                    };
                    dispatch(setRequestStatus(true));
                    return weatherData;
                }
            })
            .then(weatherData => {
                dispatch(setWeatherData(weatherData));
            })
            .catch((e) => dispatch(setRequestStatus(false)))
    };
};

const setRequestStatus = (status) => {
    return {
        type: SET_REQUEST_STATUS,
        requestStatus: status,
    };
};

export const setCurrentCity = (city) => {
    return {
        type: SET_CURRENT_CITY,
        currentCity: city
    };
};

export const checkIsSingleCity = () => {
    return {
        type: CHECK_IS_SINGLE_CITY,
    };
};

const initializingSuccess = () => ({ type: INITIALIZED_SUCCESS });

const initializeCity = (name, id) => {
    return (dispatch) => {
        dispatch(pickCity(name))
            .then(() => {
                dispatch(addCity(name, id))
                dispatch(checkIsSingleCity());
            })
            .catch(e => console.warn(e.message))
            .finally(() => dispatch(initializingSuccess()))
    }
}

export const initializeApp = () => {
    const defaultCity = 'Moscow';

    return (dispatch) => {
        const cities = JSON.parse(window.localStorage.getItem('cities')) || null;

        if (cities) {
            cities.forEach(item => {
                dispatch(addCity(item.name));
            });
            dispatch(pickCity(cities[0].name))
                .then(() => {
                    dispatch(checkIsSingleCity());
                    dispatch(initializingSuccess());
                });

        }
        else API.getUserCity()
            .then(city => dispatch(initializeCity(city)))
            .catch(() => dispatch(initializeCity(defaultCity)))
    }
};

export default appReducer;