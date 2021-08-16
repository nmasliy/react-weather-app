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
    let date = new Date();
    const dateData = {
        day: date.getDate(),
        weekday: new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date.getDate()),
        month: date.toLocaleString('default', { month: 'long' }),
        hours: ('0' + date.getHours()).slice(-2),
        minutes: ('0' + date.getMinutes()).slice(-2),
    };

    return (
        <InfoWrapper className="Info">
            <div className="Location">Lisakovsk</div>
            <div className="Today">
                <div className="Img">
                    <img src={sunny} alt="1" />
                </div>
                <div className="Date">
                    <p>
                        {`${dateData.weekday}, ${dateData.day} ${dateData.month}`}
                    </p>
                    <p>
                        <time>{`${dateData.hours}:${dateData.minutes}`}</time>
                    </p>
                </div>
            </div>
            <div className="Degree">25°C</div>
            <div className="Status">Sunny</div>
        </InfoWrapper>
    );
};

export default Info;
