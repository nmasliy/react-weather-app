import styled from 'styled-components';
import deleteIcon from '../../../assets/images/remove.svg';

const CitiesItemWrapper = styled.li`
    display: flex;
    justify-content: space-between;
    word-break: break-all;
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
    cursor: pointer;
    padding: 15px 0;

    .Delete {
        width: 30px;
        height: 30px;
        flex-shrink: 0;
    }
`;

const CitiesItem = (props) => {
    const cityItem = props.children;
    const pickCity = () => {
        if (!props.isSingleCity || props.currentCity !== cityItem)
            props.pickCity(cityItem);
    }
    const removeCity = (e) => {
        e.stopPropagation();
        if (!props.isSingleCity) props.removeCity(props.dataId);
        props.checkIsSingleCity();
    }
    return (
        <CitiesItemWrapper onClick={pickCity} className="Item">
            <span>{props.children}</span>
            {!props.isSingleCity && 
                <span className="Delete" onClick={removeCity}>
                    <img src={deleteIcon} alt="Delete city" />
                </span>
            }
        </CitiesItemWrapper>
    );
};

export default CitiesItem;
