import { useEffect } from 'react';
import { connect } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import App from './App';
import Preloader from './components/UI/Preloader';
import { initializeApp } from './redux/app-reducer';

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
	}
	
	a,
	button,
	input,
	textarea,
	span {
		display: inline-block;
	}
`;

const AppContainer = (props) => {
	useEffect(() => {
		props.initializeApp('Kostanay');
	},[])

	if (!props.initialized) {return <Preloader /> }
	else {
		return (
			<>
				<App theme={props.theme}/>
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
export default connect(mapStateToProps, { initializeApp })(AppContainer);