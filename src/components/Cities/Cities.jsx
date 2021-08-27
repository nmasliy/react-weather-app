import styled from "styled-components";
import CitiesForm from './CitiesForm/CitiesForm';
import CitiesItem from "./CitiesItem/CitiesItem";

const CitiesWrapper = styled.div`
    .Title {
        font-weight: 300;
        font-size: 36px;
        line-height: 42px;
        margin-bottom: 15px;
        text-align: center;
    }
    .List {
        padding: 20px;
        border-radius: 10px;
        background: ${props => props.theme.cities.background || ' rgba(27, 26, 26, 0.15)'};
    }
`;

const Cities = (props) => {
    const cities = props.cities.map((item) => <CitiesItem {...props} dataId={item.id} key={item.id} >{item.name}</CitiesItem>);

    return (
        <CitiesWrapper className="Cities" theme={props.theme}>
            <div className="Title">Your cities</div>
            <CitiesForm isRequestSuccess={props.isRequestSuccess} cities={props.cities} theme={props.theme} getWeatherDataAndAddCity={props.getWeatherDataAndAddCity}/>
            <ul className="List">
                {cities}
            </ul>
        </CitiesWrapper>
    );
};

export default Cities;
