import styled from 'styled-components';
import sunny from '../../assets/images/sunny.svg';

const InfoWrapper = styled.div`
    margin-bottom: 75px;
    text-align: center;
    padding-top: 100px;

    .Location {
        font-weight: 100;
        font-size: 48px;
        line-height: 56px;
        margin-bottom: 40px;
    }
    .Img {
        margin-right: 25px;
        img {
            width: 180px;
        }
    }
    .Date {
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;
        margin-left: 25px;

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
    }
    .Today {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        margin-bottom: 40px;
    }
`;

const Info = (props) => {
    return (
        <InfoWrapper className="Info">
            <div className="Location">{props.weather.city}</div>
            <div className="Today">
                <div className="Img">
                    <img src={sunny} alt="1" />
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