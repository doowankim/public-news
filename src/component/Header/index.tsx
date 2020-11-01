import React from 'react';
import * as Styled from './styles';
import { useHistory } from 'react-router-dom';

const Header = () => {
	const history = useHistory();
	return (
		<Styled.Container>
			<Styled.Wrapper>
				<Styled.Ulist>
					<li>
						<div
							onClick={() => {
								history.push('/');
							}}
						>
							헤드라인 뉴스
						</div>
					</li>
					<li>
						<div
							onClick={() => {
								history.push('/');
							}}
						>
							카테고리 별로 보기
						</div>
					</li>
				</Styled.Ulist>
			</Styled.Wrapper>
		</Styled.Container>
	);
};

export default Header;
