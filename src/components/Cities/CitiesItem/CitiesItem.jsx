import styled from "styled-components";
import deleteIcon from "../../../assets/images/remove.svg";
import {useEffect} from "react";

const CitiesItemWrapper = styled.div`
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

      @media(max-width: 840px) {
          padding: 8px 0;
          font-size: 16px;
          line-height: 24px;
        
            .Delete {
              width: 20px;
              height: 20px;
            }
      }
`;

const CitiesItem = (props) => {
    useEffect(() => {
        window.localStorage.setItem('cities', JSON.stringify(props.cities));
    }, [props.cities]);

    const cityItem = props.children;
    const pickCity = () => {
        if (!props.isSingleCity || props.currentCity.name !== cityItem)
            props.pickCity(cityItem);
    }
    const removeCity = (e) => {
        e.stopPropagation();

        if (!props.isSingleCity) props.removeAndChangeCity(props.dataId, cityItem, props.currentCity, props.cities);
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
