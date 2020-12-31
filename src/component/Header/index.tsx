import React from 'react';
import * as Styled from './styles';

function Header() {
	return (
		<Styled.Container>
			<Styled.Wrapper>
				<Styled.UList>
					<Styled.Item>
						<Styled.SLink to="/">헤드라인 뉴스</Styled.SLink>
					</Styled.Item>
					<Styled.Item>
						<Styled.SLink to="/category">카테고리 별로 보기</Styled.SLink>
					</Styled.Item>
				</Styled.UList>
			</Styled.Wrapper>
		</Styled.Container>
	);
}

export default Header;
