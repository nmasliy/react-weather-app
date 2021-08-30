import styled from "styled-components";

const InfoWrapper = styled.div`
    text-align: center;
    margin-bottom: 75px;
    padding-top: 100px;

    .Location {
        font-weight: 100;
        font-size: 48px;
        line-height: 56px;
        margin-bottom: 40px;
    }
    .Img {
        margin: 0 25px;
          width: 100px;
          height: 100px;
    }
    .Date {
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;
        margin: 0 25px;

        p {
            margin: 10px 0;
        }
    }
    .Degree {
        font-weight: bold;
        font-size: 72px;
        line-height: 84px;
    }
    .Status {
        font-weight: 500;
        font-size: 20px;
        text-transform: capitalize;
    }
    .Today {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        margin: 0 -25px;
        margin-bottom: 40px;
        overflow: hidden;
    }

      @media(max-width: 840px) {
        padding-top: 80px;
        margin-bottom: 50px;
        
        .Location {
          font-size: 36px;
          line-height: 48px;
          margin-bottom: 30px;
        }
        .Status {
          font-size: 18px;
        }
        .Degree {
          font-size: 64px;
          line-height: 72px;
        }
        .Date {
          font-size: 20px;
          line-height: 24px;
        }
      }
`;

const Info = (props) => {
    const imgBaseUrl = 'http://openweathermap.org/img/wn/';
    return (
        <InfoWrapper className="Info">
            <div className="Location">{props.weather.city}</div>
            <div className="Today">
                <div className="Img">
                    <img src={`${imgBaseUrl}${props.weather.imageCode}@2x.png`} alt={props.weather.status} />
                </div>
                <div className="Date">
                    <p>
                        {`${props.dateData.weekday}, ${props.dateData.day} ${props.dateData.month}`}
                    </p>
                    <p>
                        <time>{`${props.dateData.hours}:${props.dateData.minutes}`}</time>
                    </p>
                </div>
            </div>
            <div className="Degree">{Math.round(props.weather.temperature)}°C</div>
            <div className="Status">{props.weather.status}</div>
        </InfoWrapper>
    );
};

export default Info;