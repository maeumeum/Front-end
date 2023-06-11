import { useState, useEffect } from 'react';
import {
	Container,
	Main,
	MenuBar,
	TabMenu,
} from '@components/MyPage/myPage.ts';

import Tab from '@components/Tab/Tab.tsx';
import MyPost from '@components/MyPost/MyPost.tsx';
import Menu from '@components/Menu/Menu.tsx';
import { TabTypes } from '@src/types/myPageConstants';
import { get } from '@src/api/Api';
import DataType from '@src/types/DataType';
import Swal from 'sweetalert2';
import alertData from '@src/utils/swalObject';

interface ReviewProps {
	title: string;
	content: string;
	createdAt: string;
	_id: string;
}

function MyReview() {
	const tabs = [TabTypes.WRITTEN_REVIEW];
	const [currTab] = useState<TabTypes>(TabTypes.WRITTEN_REVIEW);
	const [userReviewData, setUserReviewData] = useState<ReviewProps[]>([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const getUserReview = await get<DataType>('/api/reviews/users', {});
				setUserReviewData(getUserReview.data as ReviewProps[]);
			} catch (error) {
				Swal.fire(
					alertData.errorMessage('데이터를 불러오는데 실패하였습니다.'),
				);
			}
		};

		fetchData();
	}, []);

	const removePost = (postId: string) => {
		setUserReviewData(userReviewData.filter((post) => post._id !== postId));
	};

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
					{userReviewData.length === 0 && <div>작성된 리뷰가 없습니다.</div>}
					{userReviewData.map((data) => {
						return (
							<MyPost
								key={data._id}
								communityData={data}
								currTab={currTab}
								onRemovePost={removePost}
							/>
						);
					})}
				</Main>
			</Container>
		</>
	);
}

export default MyReview;