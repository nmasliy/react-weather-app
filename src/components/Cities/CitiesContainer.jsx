import { connect } from 'react-redux';
import { pickCity } from '../../redux/app-reducer';
import Cities from './Cities';

const CitiesContainer = (props) => {
    return (
        <Cities pickCity={props.pickCity}/>
    );
};

const mapStateToProps = (state) => {
    return {
        currentCity: state.currentCity
    }
}

export default connect(mapStateToProps, { pickCity })(CitiesContainer);