import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as Styled from './styles';

function Home() {
	const [headline, setHeadline] = useState<any>();
	const [everything, setEverything] = useState<any>();
	const [source, setSource] = useState<any>();

	const apiKey = `d424d6d114074feb80c770e97742831a`;

	useEffect(() => {
		// Headline 기사
		axios({
			method: 'get',
			baseURL: 'https://newsapi.org/v2/top-headlines?country=us',
			params: {
				apiKey: apiKey,
			},
		})
			.then((res: any) => setHeadline(res.data.articles))
			.catch((err: any) => console.log(err));

		// Everything 기사
		axios({
			method: 'get',
			baseURL: 'https://newsapi.org/v2/everything?q=bitcoin',
			params: {
				apiKey: apiKey,
			},
		})
			.then((res: any) => setEverything(res.data.articles))
			.catch((err: any) => console.log(err));

		// Source 기사
		axios({
			method: 'get',
			baseURL: `https://newsapi.org/v2/sources?apiKey=${apiKey}`,
		})
			.then((res: any) => setSource(res.data.sources))
			.catch((err: any) => console.log(err));
	}, [apiKey]);

	return (
		<Styled.Container>
			<Styled.Box>
				<Styled.Title>Headline News</Styled.Title>
				{headline?.map((hData: any, index: number) => (
					<React.Fragment key={index}>
						<Styled.ArticleWrapper>
							<Styled.ImageWrapper href={hData.url}>
								<Styled.Image src={hData.urlToImage} alt="" />
							</Styled.ImageWrapper>
							<Styled.Description>{hData.description}</Styled.Description>
						</Styled.ArticleWrapper>
					</React.Fragment>
				))}
			</Styled.Box>
			<Styled.Hr />
			<Styled.Box>
				<Styled.Title>Everything News</Styled.Title>
				{everything?.map((eData: any, index: number) => (
					<React.Fragment key={index}>
						<Styled.ArticleWrapper>
							<Styled.ImageWrapper href={eData.url}>
								<Styled.Image src={eData.urlToImage} alt="" />
							</Styled.ImageWrapper>
							<Styled.Description>{eData.description}</Styled.Description>
						</Styled.ArticleWrapper>
					</React.Fragment>
				))}
			</Styled.Box>
			<Styled.Hr />
			<Styled.Box>
				<Styled.Title>Source News</Styled.Title>
				<div>{source && source[0]?.description}</div>
			</Styled.Box>
		</Styled.Container>
	);
}

export default Home;
