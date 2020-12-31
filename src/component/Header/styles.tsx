import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div``;

export const Wrapper = styled.div`
	display: flex;
	width: 100%;
	padding: 5px 20px;
	color: #ffffff;
	background: #3f64bf;
	font-weight: bold;
`;

export const UList = styled.ul`
	display: flex;
	list-style: none;
`;

export const Item = styled.li`
	margin-left: 15px;
	cursor: pointer;
	border-bottom: 3px solid
		${(props: any) => (props.current ? '#ffffff' : '#3f64bf')};
`;

export const SLink = styled(Link)``;
