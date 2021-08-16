import Header from './components/Header/Header';
import InfoContainer from './components/Info/InfoContainer';
import Cities from './components/Cities/Cities';
import styled from 'styled-components';

import sunny from './assets/images/sunny-bg.jpg';
import cloudy from './assets/images/cloudy-bg.jpg';
import thunderstorm from './assets/images/thunderstorm-bg.jpg';
import snowy from './assets/images/snowy-bg.jpg';
import rainy from './assets/images/rainy-bg.jpg';

const AppWrapper = styled.div`
	background: 
		${props => props.theme.appBackground},
		url(${props => props.backgroundImageUrl}) center / cover no-repeat;
	max-width: 800px;
	width: 100%;
	border-radius: 15px;
	padding: 30px;
	margin: 30px auto;
`;

const App = (props) => {
    return (
		<AppWrapper theme={props.theme} className="App" backgroundImageUrl={sunny}>
			<Header />
			<InfoContainer />
			<Cities />
		</AppWrapper>
    );
};

export default App;