import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Router from './Router';

function App() {
	const GlobalStyle = createGlobalStyle`
    body {
      margin: 0;
      padding: 0;
    }
  `;
	return (
		<div>
			<GlobalStyle />
			<Router />
		</div>
	);
}

export default App;
