import styled from "styled-components";
import CitiesForm from "./CitiesForm/CitiesForm";
import CitiesItem from "./CitiesItem/CitiesItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

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
        border-radius: 10px;
        background: ${props => props.theme.cities.background || ' rgba(27, 26, 26, 0.15)'};
    } 
    .City-enter {
      opacity: 0;
    }
    .City-enter-active {
      opacity: 1;
      transition: opacity 500ms;
    }
    .City-exit {
      opacity: 1;
    }
    .City-exit-active {
      opacity: 0;
      transition: opacity 500ms;
    }

  @media(max-width: 840px) {
    .List {
      padding: 12px;
    }
    .Title {
      font-size: 28px;
      line-height: 36px;
    }
  }
`;

const Cities = (props) => {

    const cities = props.cities.map((item) => {
        return (
            <CSSTransition key={item.id} classNames="City" timeout={300}>
                <CitiesItem  {...props} dataId={item.id} >{item.name}</CitiesItem>
            </CSSTransition>
        )
    })

    return (
        <CitiesWrapper className="Cities" theme={props.theme}>
            <div className="Title">Your cities</div>
            <CitiesForm isRequestSuccess={props.isRequestSuccess} cities={props.cities} theme={props.theme} getWeatherDataAndAddCity={props.getWeatherDataAndAddCity}/>
            <div className="List">
                <TransitionGroup>
                    {cities}
                </TransitionGroup>
            </div>
        </CitiesWrapper>
    );
};

export default Cities;
