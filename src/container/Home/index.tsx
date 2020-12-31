import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as Styled from './styles';

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
		<Styled.Container>
			{/* <Styled.HeadlineBox>
				<Styled.Title>Headline News</Styled.Title>
				<Styled.Table>
					<tbody>
						<tr>
							<td rowSpan={5}>
								<Styled.Image src="/images/news.jpeg" alt="" />
							</td>
							<td>Description</td>
						</tr>
						<tr>
							<td>Description</td>
						</tr>
						<tr>
							<td>Description</td>
						</tr>
						<tr>
							<td>Description</td>
						</tr>
						<tr>
							<td>Description</td>
						</tr>
					</tbody>
				</Styled.Table>
			</Styled.HeadlineBox> */}
		</Styled.Container>
	);
}

export default Home;
