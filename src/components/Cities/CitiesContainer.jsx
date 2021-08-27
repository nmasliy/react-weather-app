import { connect } from "react-redux";
import {pickCity, getWeatherDataAndAddCity, removeAndChangeCity, checkIsSingleCity} from "../../redux/app-reducer";
import Cities from "./Cities";

const CitiesContainer = (props) => {
    return (
        <Cities {...props}/>
    );
};

const mapStateToProps = (state) => {
    return {
        theme: state.theme.styles,
        cities: state.cities,
        isSingleCity: state.isSingleCity,
        currentCity: state.currentCity,
        isRequestSuccess: state.isRequestSuccess
    }
}

export default connect(mapStateToProps, { pickCity, getWeatherDataAndAddCity, removeAndChangeCity, checkIsSingleCity })(CitiesContainer);