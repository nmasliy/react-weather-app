import Header from './components/Header/Header';
import InfoContainer from './components/Info/InfoContainer';
import Cities from './components/Cities/Cities';
import styled from 'styled-components';

const AppWrapper = styled.div`
	background: ${props => props.theme.appBackground};
	max-width: 800px;
	width: 100%;
	border-radius: 15px;
	padding: 30px;
	margin: 30px auto;
`;

const App = (props) => {
    return (
		<AppWrapper theme={props.theme} className="App">
			<Header />
			<InfoContainer />
			<Cities />
		</AppWrapper>
    );
};

export default App;