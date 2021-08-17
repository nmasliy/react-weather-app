import styled from 'styled-components';

const ButtonWrapper = styled.button`
    background-color: ${props => props.itemBackground || '#FFFFFF'};
    color: ${props => props.itemColor || '#000000'};
    padding: 5px 10px;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.1;
    border: none;
    box-shadow: ${props => props.shadow || 'none'};
`

const Button = (props) => {
    return (
        <ButtonWrapper {...props}>{props.children}</ButtonWrapper>
    )
}

export default Button;