import { connect } from 'react-redux';
import { pickCity, addAndPickCity, removeCity, checkIsSingleCity } from '../../redux/app-reducer';
import Cities from './Cities';

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
        requestStatus: state.requestStatus
    }
}

export default connect(mapStateToProps, { pickCity, addAndPickCity, removeCity, checkIsSingleCity })(CitiesContainer);