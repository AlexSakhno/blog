import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
	html {
		background-color: #EBEEF3;
	}

	body {
		@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
		margin: 0 auto;
		font-family: 'Inter', sans-serif;
		font-style: normal;
		font-weight: 400;

		height: 100vh;

		background-color: #EBEEF3;
	}	
`
