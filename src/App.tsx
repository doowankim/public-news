import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

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
			<div>App</div>
		</div>
	);
}

export default App;
