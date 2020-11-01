import React, { useState, useEffect } from 'react';
import * as Styled from './styles';
import axios from 'axios';

function Home() {
	const [data, setData] = useState<any>();

	useEffect(() => {
		axios({
			method: 'get',
			baseURL: 'https://newsapi.org/v2/top-headlines?country=us',
			params: {
				apiKey: 'd424d6d114074feb80c770e97742831a',
			},
		})
			.then((res: any) => setData(res.data.articles))
			.catch((err: any) => console.log(err));
	}, []);
	return (
		<Styled.Container>
			{data?.map((d: any, index: number) => (
				<React.Fragment key={index}>
					<div>{d.author}</div>
				</React.Fragment>
			))}
		</Styled.Container>
	);
}

export default Home;
