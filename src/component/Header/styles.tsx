import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
	width: 100%;
	height: 50px;
	background-color: #3f64bf;
`;

export const Logo = styled.div`
	width: 1080px;
	margin: 0 auto;
	color: #fff;
`;

export const LogoBox = styled.div`
	display: flex;
`;

export const LogoName = styled.div`
	font-weight: bold;
	font-size: 18px;
	margin-top: 15px;
`;

export const News = styled.div`
	font-size: 24px;
	margin: 10px 10px;
`;

export const Segment = styled.ul`
	display: flex;
	width: 1120px;
	margin: 20px auto;
	list-style: none;

	li {
		font-weight: bold;
		margin-right: 20px;
		cursor: pointer;

		&:hover {
			color: ${lighten(0.5, '#020202')};
		}
	}
`;

export const Hr = styled.div`
	width: 100%;
	height: 1px;
	background-color: #e5e3e3;
`;
