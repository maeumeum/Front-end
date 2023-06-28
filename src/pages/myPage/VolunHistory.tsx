import { useState, useEffect } from 'react';
import {
	CardBox,
	Container,
	Main,
	MenuBar,
	TabMenu,
} from '@components/MyPage/myPage.ts';
import Tab from '@components/Tab/Tab.tsx';
import MyCardImg from '@src/components/Card/MyPageCard/MyCardImg';
import Menu from '@components/Menu/Menu.tsx';
import Pagination from '@components/Pagination/Pagination.tsx';
import { TabTypes } from '@src/types/myPageConstants';
import { get } from '@api/api';
import { DataType } from '@src/types/dataType';
import Swal from 'sweetalert2';
import alertData from '@utils/swalObject';
import NoData from '@components/NoData/NoData.tsx';
import { getVolunHistoryCardType } from '@src/types/cardType';
import { transformVolunData } from '@utils/transformData';

function MyVolunHistory() {
	const [currTab, setCurrTab] = useState<TabTypes>(TabTypes.VOLUNTEER_APPLIED);
	const tabs = [TabTypes.VOLUNTEER_APPLIED, TabTypes.VOLUNTEER_COMPLETED];
	const handleClickTab = (tab: TabTypes) => {
		setCurrTab(tab);
	};
	const [appliedData, setAppliedData] = useState<getVolunHistoryCardType[]>([]);
	const [completedData, setCompletedData] = useState<getVolunHistoryCardType[]>(
		[],
	);
	const [volunData, setVolunData] = useState<getVolunHistoryCardType[]>([]);
	//페이지네이션
	const [currentPage, setCurrentPage] = useState(1);
	const pageSize = 8;
	const handlePageChange = (pageNumber: number) => {
		setCurrentPage(pageNumber);
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				//완료한 봉사 (false)
				const getCompetededData = await get<DataType>(
					'/api/applications?status=false',
					{},
				);
				setAppliedData(getCompetededData.data as getVolunHistoryCardType[]);
			} catch (error) {
				Swal.fire(alertData.errorMessage('데이터를 불러오는데 실패했습니다.'));
			}
		};

		fetchData();
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			try {
				//신청한 봉사 (true)
				const getAppliedData = await get<DataType>(
					'/api/applications?status=true',
					{},
				);
				setCompletedData(getAppliedData.data as getVolunHistoryCardType[]);
			} catch (error) {
				Swal.fire(alertData.errorMessage('데이터를 불러오는데 실패했습니다.'));
			}
		};
		fetchData();
	}, []);

	useEffect(() => {
		currTab === TabTypes.VOLUNTEER_APPLIED
			? setVolunData(appliedData)
			: setVolunData(completedData);
	}, [currTab, appliedData, completedData]);

	const myVolunCardData = volunData.map(transformVolunData);

	return (
		<>
			<Container>
				<MenuBar>
					<Menu title={'마이페이지'} />
				</MenuBar>

				<Main>
					<TabMenu>
						<Tab currTab={currTab} onClick={handleClickTab} tabs={tabs} />
					</TabMenu>
					{volunData.length === 0 && <NoData category='봉사' />}
					<CardBox>
						{myVolunCardData
							.slice((currentPage - 1) * pageSize, currentPage * pageSize)
							.map((data, index) => (
								<MyCardImg
									key={data.volunCardData.volunId + '-' + index}
									currTab={currTab}
									volunCardData={data.volunCardData}
								/>
							))}
					</CardBox>
				</Main>
			</Container>

			{volunData.length > 0 && (
				<Pagination
					currentPage={currentPage}
					totalPages={Math.ceil(volunData.length / pageSize)}
					handlePageChange={handlePageChange}
				/>
			)}
		</>
	);
}

export default MyVolunHistory;
