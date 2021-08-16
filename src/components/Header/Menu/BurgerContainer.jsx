import { connect } from 'react-redux';
import Burger from './Burger';

const BurgerContainer = (props) => {
    return <Burger theme={props.theme}/>;
}

const mapStateToProps = (state) => {
    return {
        theme: state.theme.styles,
    }
}

export default connect(mapStateToProps, null)(BurgerContainer);