import { useState } from "react";
import styled from "styled-components";
import CitiesItem from "./CitiesItem/CitiesItem";
import Button from "../UI/Button";
import Input from "../UI/Input";

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

    .AddCityForm {
        margin-bottom: 30px;
    }

    input {
        width: 66.666%;
    }

    button {
        width: 33.333%;
    }
`;

const Cities = (props) => {
    const [newCity, setNewCity] = useState('');

    const onChangeHandler = (e) => {
        setNewCity(e.target.value);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        // validation conditions ->
        props.addCity(newCity);
        props.pickCity(newCity);
        setNewCity('');
        props.checkIsSingleCity();
    }

    const cities = props.cities.map((item) => <CitiesItem checkIsSingleCity={props.checkIsSingleCity} isSingleCity={props.isSingleCity} dataId={item.id} key={item.id} removeCity={props.removeCity} pickCity={props.pickCity}>{item.name}</CitiesItem>);

    return (
        <CitiesWrapper className="Cities" theme={props.theme}>
            <div className="Title">Your cities</div>
            <form className="AddCityForm" action="#" onSubmit={onSubmitHandler}>
                <Input
                    type="text"
                    value={newCity}
                    onChange={onChangeHandler}
                    itemBackground={props.theme.input.background}
                    itemColor={props.theme.input.color}
                />
                <Button itemBackground={props.theme.button.background} itemColor={props.theme.button.color} shadow={props.theme.shadow}>
                    Добавить
                </Button>
            </form>
            <ul className="List">
                {cities}
            </ul>
        </CitiesWrapper>
    );
};

export default Cities;
