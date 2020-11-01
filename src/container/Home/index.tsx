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
			.then((res: any) => setData(res.data))
			.catch((err: any) => console.log(err));
	}, []);
	console.log(data);
	return (
		<Styled.Container>
			<div>Home</div>
		</Styled.Container>
	);
}

export default Home;
