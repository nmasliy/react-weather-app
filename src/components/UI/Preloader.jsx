import styled from "styled-components";
import preloader from "../../assets/images/preloader.svg";

const PreloaderWrapper = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    img {
        width: 300px;
    }
`;

const Preloader = (props) => {
    return (
        <PreloaderWrapper>
            <img src={preloader} alt='Loading...' />
        </PreloaderWrapper>
    )
}

export default Preloader;