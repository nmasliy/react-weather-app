import { connect } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import App from './App';

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

	a,
	button,
	input,
	textarea,
	span {
		display: inline-block;
	}
`;

const AppContainer = (props) => {
    return (
		<>
			<App theme={props.theme}/>
			<GlobalStyle theme={props.theme}/>
		</>
	)
};

const mapStateToProps = (state) => {
	return {
		theme: state.theme.styles,
	}
}
export default connect(mapStateToProps, null)(AppContainer);