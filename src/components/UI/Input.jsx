import styled from "styled-components";

const InputWrapper = styled.input`
    background-color: ${props => props.itemBackground || '#FFFFFF'};
    color: ${props => props.itemColor || '#000000'};
    border: none;
    padding: 5px 10px;
    outline-color: ${props => props.itemBackground || '#FFFFFF'};
    font-size: 16px;
    line-height: 1.1;
    box-shadow: ${props => props.shadow || 'none'};
`

const Input = (props) => {
    return (
        <InputWrapper {...props}/>
    )
}

export default Input;