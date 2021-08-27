import { connect } from "react-redux";
import { setTheme } from "../../../redux/app-reducer";
import ThemeToggler from "./ThemeToggler";

const ThemeTogglerContainer = (props) => {
    const toggleTheme = () => {
        if (props.theme.name === props.themes.light.name) {
            props.setTheme(props.themes.dark);
        } else {
            props.setTheme(props.themes.light);
        }
    };
    return <ThemeToggler theme={props.theme.styles} toggleTheme={toggleTheme}/>;
    
};

const mapStateToProps = (state) => {
    return {
        theme: state.theme,
        themes: state.themes,
	}
}

export default connect(mapStateToProps, { setTheme })(ThemeTogglerContainer);