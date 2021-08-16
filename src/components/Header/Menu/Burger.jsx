import styled from "styled-components";

const BurgerWrapper = styled.button`
    display: block;
    width: 30px;
    cursor: pointer;
    border: none;
    padding: 0;
    background-color: transparent;

    span {
        display: block;
        width: 100%;
        height: 3px;
        margin-bottom: 4px;
        border-radius: 10px;
        background-color: ${props => props.theme.burger};
        transition: background-color .8s;
        
        &:last-child {
            margin-bottom: 0;
        }
    }
`;

const Burger = (props) => {
    return (
        <BurgerWrapper theme={props.theme} className="Burger">
            <span></span>
            <span></span>
            <span></span>
        </BurgerWrapper>
    )
}

export default Burger;