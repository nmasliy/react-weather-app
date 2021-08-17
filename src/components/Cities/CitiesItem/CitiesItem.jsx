import styled from "styled-components";

const CitiesItemWrapper = styled.li`
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
    cursor: pointer;
    padding: 5px 0;
`;

const CitiesItem = (props) => {
    return (
        <CitiesItemWrapper onClick={() => props.pickCity(props.children)} className="Item">
            {props.children}
        </CitiesItemWrapper>
    );
};

export default CitiesItem;
