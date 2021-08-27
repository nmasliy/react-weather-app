import styled, {createGlobalStyle} from 'styled-components';
import Header from './components/Header/Header';
import InfoContainer from './components/Info/InfoContainer';
import CitiesContainer from './components/Cities/CitiesContainer';
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {useEffect} from "react";
import Preloader from "./components/UI/Preloader";

const GlobalStyle = createGlobalStyle`
	html {
		box-sizing: border-box;
	}

	*,
	*::before,
	*::after {
		box-sizing: inherit;
	}

	body {
		font-family: Roboto, sans-serif;
		font-weight: 400;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: ${props => props.theme.primary || '#000000'};
		background-color: ${props => props.theme.background || '#FFFFFF'};
		transition: color .4s ease-in-out, background-color .5s ease-in-out;
	}

	img {
		display: flex;
		max-width: 100%;
	}

	a,
	button {
		cursor: pointer;
	}
	
	a,
	button,
	input,
	textarea,
	span {
		display: inline-block;
	}
`;

const AppWrapper = styled.div`
	background: ${props => props.theme.appBackground};
	max-width: 800px;
	width: 100%;
	border-radius: 15px;
	padding: 30px;
	margin: 30px auto;
`;

const App = (props) => {
	useEffect(() => {
		props.initializeApp();
	},[ ])

	if (!props.initialized) { return <Preloader /> }
	else {
		return (
			<>
				<AppWrapper theme={props.theme} className="App">
					<Header />
					<InfoContainer />
					<CitiesContainer />
				</AppWrapper>
				<GlobalStyle theme={props.theme}/>
			</>
		)
	}
};

const mapStateToProps = (state) => {
	return {
		theme: state.theme.styles,
		currentCity: state.currentCity,
		initialized: state.initialized,
	}
}

export default connect(mapStateToProps, { initializeApp })(App);