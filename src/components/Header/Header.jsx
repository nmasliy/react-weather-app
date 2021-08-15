import styled from "styled-components";
import Menu from "./Menu/Menu";
import ThemeTogglerContainer from "./ThemeToggler/ThemeTogglerContainer";

const HeaderStyles = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Header = (props) => {
    return (
        <HeaderStyles>
            <Menu />
            <ThemeTogglerContainer />
        </HeaderStyles>
    );
};

export default Header;