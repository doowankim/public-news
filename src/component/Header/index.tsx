import React from 'react';
import * as Styled from './styles';

function Header() {
	return (
		<Styled.Container>
			<Styled.Logo>
				<Styled.LogoBox>
					<Styled.LogoName>Global</Styled.LogoName>
					<Styled.News>News</Styled.News>
				</Styled.LogoBox>
			</Styled.Logo>
			<Styled.Segment>
				<li>Headline</li>
				<li>Everything</li>
				<li>Source</li>
			</Styled.Segment>
			<Styled.Hr />
		</Styled.Container>
	);
}

export default Header;
