const SET_THEME = "SET-THEME";

const initialState = {
    themes: {
        dark: {
            name: 'dark',
            styles: {
                primary: "#FFFFFF",
                burger: "#89AFE7",
                toggler: {
                    container: "#89AFE7",
                    circle: "#663C6C",
                },
                background: "#250933",
                appBackground: "linear-gradient(180deg, rgba(1, 9, 85, 0.7) 0%, rgba(148, 8, 151, 0.7) 100%)",
            }
        },
        light: {
            name: 'light',
            styles: {
                primary: "#363434",
                burger: "#333232",
                toggler: {
                    container: "#284c54",
                    circle: "#FFFFFF",
                },
                background: "#FFFFFF",
                appBackground: "linear-gradient(180deg, rgba(155, 245, 240, 0.8) 0%, rgba(141, 240, 169, 0.8) 100%)",
            }
        },
    },
    theme: {
        name: 'dark',
        styles: {
            primary: "#FFFFFF",
            burger: "#89AFE7",
            toggler: {
                container: "#89AFE7",
                circle: "#663C6C",
            },
            background: "#250933",
            appBackground: "linear-gradient(180deg, rgba(1, 9, 85, 0.7) 0%, rgba(148, 8, 151, 0.7) 100%)",
        }
    },
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_THEME: {
            return {
                ...state,
                theme: action.theme,
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

export default appReducer;
