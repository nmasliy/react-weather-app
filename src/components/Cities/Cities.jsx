import styled from "styled-components";
import CitiesItem from './CitiesItem/CitiesItem';

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
        padding-top: 10px;
        border-radius: 15px;
        background: rgba(27, 26, 26, 0.15);
    }
`;

const Cities = (props) => {
    return (
        <CitiesWrapper className="Cities">
            <div className="Title">Your cities</div>
            <ul className="List">
                <CitiesItem pickCity={props.pickCity}>Qostanai</CitiesItem>
                <CitiesItem pickCity={props.pickCity}>Lisakovsk</CitiesItem>
                <CitiesItem pickCity={props.pickCity}>Moscow</CitiesItem>
                <CitiesItem pickCity={props.pickCity}>Los Angeles</CitiesItem>
            </ul>
        </CitiesWrapper>
    );
};

export default Cities;
