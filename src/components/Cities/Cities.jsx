import styled from "styled-components";

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
    .Item {
        font-weight: 500;
        font-size: 18px;
        line-height: 30px;
        cursor: pointer;
        padding: 5px 0;
    }
`;

const Cities = (props) => {
    return (
        <CitiesWrapper className="Cities">
            <div className="Title">Your cities</div>
            <ul className="List">
                <li className="Item">Qostanai (Kazakshtan)</li>
                <li className="Item">Lisakovsk (Kazakshtan)</li>
                <li className="Item">Moscow (Russia)</li>
                <li className="Item">Los Angeles (USA)</li>
            </ul>
        </CitiesWrapper>
    );
};

export default Cities;
