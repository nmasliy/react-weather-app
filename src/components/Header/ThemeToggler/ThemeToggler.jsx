import { useState } from 'react';
import styled from 'styled-components';

const ThemeTogglerWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: ${props => props.theme.toggler.container || '#000000'};
    border-radius: 10px;
    width: 44px;
    height: 22px;
    cursor: pointer;
	transition: background-color .8s;

    .Circle {
        background-color: ${props => props.theme.toggler.circle || '#000000'};
        border-radius: 50%;
        width: 15px;
        height: 15px;
        margin-left: 3px;
        transition: background-color .8s, margin .5s ease-out;
    }
`;

const ThemeToggler = (props) => {
    const [togglerCircle, moveTogglerCircle] = useState(false);
    
    const handleClick = (e) => {
        moveTogglerCircle(!togglerCircle);
        props.toggleTheme();
    }

    return (
        <ThemeTogglerWrapper theme={props.theme} className="Toggler" onClick={handleClick}>
            <div className="Circle" style={togglerCircle ? {marginLeft: 26} : {}}></div>
        </ThemeTogglerWrapper>
    );
};

export default ThemeToggler;