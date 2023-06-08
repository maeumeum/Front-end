import { useState, useEffect } from 'react';
import {
	Container,
	Main,
	MenuBar,
	TabMenu,
	CardBox,
} from '@components/MyPage/myPage.ts';
import car from '@src/assets/images/car.png';

import Tab from '@components/Tab/Tab.tsx';
import Card from '@components/Card/Card.tsx';
import Menu from '@components/Menu/Menu.tsx';
import { TabTypes } from '@src/utils/EnumTypes';
import { get } from '@src/api/Api';
import { getToken } from '@src/api/Token';

const props = [
	{
		id: 1,
		title:
			'지금 당장 이메일 내의 스팸메시지를 삭제해보세요! 탄소가 줄어듭니다.',
		thumbnail: car,
		nickname: '스팸메시지지우기',
		profile: car,
		recruitStatus: '모집중',
		startDate: '2021-01-01',
		endDate: '2021-01-02',
	},
	{
		id: 2,
		title:
			'페트병의 라벨을 잘 제거합시다! 1초의 행동으로 환경을 보호할 수 있습니다',
		thumbnail: car,
		nickname: '라벨요정',
		profile: car,
		recruitStatus: '모집완료',
		startDate: '2021-01-01',
		endDate: '2021-01-02',
	},
];
interface ResponseData {
	_id: string;
	title: string;
	centName: string;
	createdAt: string;
	statusName: string;
	deadline: string;
	startDate: string;
	endDate: string;
	image: string;
	register_user_id: {
		nickname: string;
		image: string;
		introduction: string;
	};
	updatedAt: string;
}

function volunSuggest() {
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await get('/api/volunteers/registeration', {
					headers: {
						Authorization: `Bearer ${getToken()}`,
					},
				});
				setDataList(response as ResponseData[]);
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, []);
	const [dataList, setDataList] = useState<ResponseData[]>([]);
	const tabs = [TabTypes.VOLUNTEER_SUGGEST];
	const [currTab] = useState<TabTypes>(TabTypes.VOLUNTEER_SUGGEST);
	console.log(dataList);
	const transformData = dataList.map((data) => {
		return {
			createdAt: data.createdAt,
			volunteer_id: {
				startDate: data.startDate,
				endDate: data.endDate,
				_id: data._id,
				title: data.title,
				centName: data.centName,
				statusName: data.statusName,
				deadline: data.deadline,
				images: [car],
			},
		};
	});

	return (
		<>
			<Container>
				<MenuBar>
					<Menu title={'마이페이지'} />
				</MenuBar>

				<Main>
					<TabMenu>
						<Tab currTab={currTab} tabs={tabs} />
					</TabMenu>
					<CardBox>
						{transformData.map((data, idx) => (
							<Card key={data.volunteer_id._id} data={data} currTab={currTab} />
						))}
					</CardBox>
				</Main>
			</Container>
		</>
	);
}

export default volunSuggest;
