import React, { useState, useEffect } from 'react';
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

	console.log(data);

	return (
		<div>
			<div></div>
		</div>
	);
}

export default Home;
