import { connect } from 'react-redux';
import { pickCity, addCity } from '../../redux/app-reducer';
import Cities from './Cities';

const CitiesContainer = (props) => {
    return (
        <Cities pickCity={props.pickCity} addCity={props.addCity} cities={props.cities} theme={props.theme} />
    );
};

const mapStateToProps = (state) => {
    return {
        theme: state.theme.styles,
        cities: state.cities
    }
}

export default connect(mapStateToProps, { pickCity, addCity })(CitiesContainer);