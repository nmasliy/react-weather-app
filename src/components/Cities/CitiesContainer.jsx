import { connect } from 'react-redux';
import { pickCity, addCity, removeCity, checkIsSingleCity } from '../../redux/app-reducer';
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
    }
}

export default connect(mapStateToProps, { pickCity, addCity, removeCity, checkIsSingleCity })(CitiesContainer);