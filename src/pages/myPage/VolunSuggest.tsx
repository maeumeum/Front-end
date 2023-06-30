import { useState, useEffect } from 'react';
import {
	Container,
	Main,
	MenuBar,
	TabMenu,
	CardBox,
} from '@components/MyPage/myPage.ts';
import Tab from '@components/Tab/Tab.tsx';
import Card from '@components/Card/Card.tsx';
import Pagination from '@components/Pagination/Pagination.tsx';
import Menu from '@components/Menu/Menu.tsx';
import { TabTypes } from '@src/types/myPageConstants';
import { get } from '@api/api';
import { DataType } from '@src/types/dataType';
import Swal from 'sweetalert2';
import alertData from '@utils/swalObject';
import MyCardImg from '@src/components/Card/MyPageCard/MyCardImg';
import NoData from '@components/NoData/NoData.tsx';
import { transformVolunSuggestData } from '@utils/transformData';
import { getVolunSuggestDataProps } from '@src/types/cardType';

function VolunSuggest() {
	const [suggestVolunList, setSuggestVolunList] = useState<
		getVolunSuggestDataProps[]
	>([]);
	const tabs = [TabTypes.VOLUNTEER_SUGGEST];
	const currTab = tabs[0];

	//페이지네이션
	const [currentPage, setCurrentPage] = useState(1);
	const pageSize = 8;
	const handlePageChange = (pageNumber: number) => {
		setCurrentPage(pageNumber);
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const getSuggestedData = await get<DataType>(
					'/api/volunteers/registerations',
					{},
				);
				setSuggestVolunList(
					getSuggestedData.data
						.registerationVolunteers as getVolunSuggestDataProps[],
				);
			} catch (error) {
				Swal.fire(alertData.errorMessage('데이터를 불러오는데 실패했습니다.'));
			}
		};
		fetchData();
	}, []);

	const myVolunCardData = suggestVolunList.map(transformVolunSuggestData);

	return (
		<>
			<Container>
				<MenuBar>
					<Menu title={'마이페이지'} />
				</MenuBar>

				<Main>
					<TabMenu>
						<Tab tabs={tabs} />
					</TabMenu>
					{suggestVolunList.length === 0 && <NoData category='봉사' />}
					<CardBox>
						{myVolunCardData
							.slice((currentPage - 1) * pageSize, currentPage * pageSize)
							.map((data, index) => (
								<MyCardImg
									key={data.volunCardData.volunId + '-' + index}
									volunCardData={data.volunCardData}
									currTab={currTab}
								/>
							))}
					</CardBox>
				</Main>
			</Container>
			{myVolunCardData.length > 0 && (
				<Pagination
					currentPage={currentPage}
					totalPages={Math.ceil(myVolunCardData.length / pageSize)}
					handlePageChange={handlePageChange}
				/>
			)}
		</>
	);
}

export default VolunSuggest;
