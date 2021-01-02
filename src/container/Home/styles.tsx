import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	margin-top: 100px;
`;

export const Box = styled.div`
	width: 1080px;
	margin: 0 auto;
`;

export const Title = styled.div`
	font-size: 24px;
	font-weight: bold;
`;

export const ImageWrapper = styled.a`
	height: max-content;
	margin-right: 50px;
	cursor: pointer;
`;

export const Image = styled.img`
	width: 300px;
	height: 180px;
`;

export const ArticleWrapper = styled.div`
	display: flex;
	margin: 30px 0;
	/* white-space: normal;
	line-height: 1.2;
	text-overflow: ellipsis; */
`;

export const Description = styled.div`
	font-weight: bold;
	font-size: 18px;
`;

export const Hr = styled.div`
	width: 1080px;
	height: 1px;
	background-color: #e5e3e3;
	margin: 20px auto;
`;
