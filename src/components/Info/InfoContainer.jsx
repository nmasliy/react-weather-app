import { connect } from 'react-redux';
import Info from './Info';

const InfoContainer = (props) => {
    let date = new Date();
    const dateData = {
        day: date.getDate(),
        weekday: new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date.getDate()),
        month: date.toLocaleString('default', { month: 'long' }),
        hours: ('0' + date.getHours()).slice(-2),
        minutes: ('0' + date.getMinutes()).slice(-2),
    };

    return (
        <Info dateData={dateData} weather={props.weather}/>
    );
};

const mapStateToProps = (state) => {
    return {
        weather: state.weather,
    }
}

export default connect(mapStateToProps, {})(InfoContainer);
