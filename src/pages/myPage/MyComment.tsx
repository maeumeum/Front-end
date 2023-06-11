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
import DataType from '@src/types/DataType';
import { TabTypes } from '@src/types/myPageConstants';
import { get } from '@src/api/Api';
import Swal from 'sweetalert2';
import alertData from '@src/utils/swalObject';

interface CommunityProps {
	title: string;
	content: string;
	createdAt: string;
	_id: string;
	images: string | null;
	postType: string;
}

function MyComment() {
	const tabs = [TabTypes.WRITTEN_POSTS, TabTypes.COMMENTED_POSTS];
	const [currTab, setCurrTab] = useState<TabTypes>(TabTypes.WRITTEN_POSTS);
	const [postData, setPostData] = useState<CommunityProps[]>([]);
	const [selecteddata, setSelectedData] = useState<CommunityProps[]>([]);
	const [commentData, setCommentData] = useState<CommunityProps[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const getPostData = await get<DataType>('/api/community/user', {});
				setPostData(getPostData.data as CommunityProps[]);
			} catch (error) {
				Swal.fire(alertData.failMessage('데이터를 불러오는데'));
			}
		};

		fetchData();
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const getCommentData = await get<DataType>(
					'/api/volunteerComments/users',
					{},
				);
				setCommentData(getCommentData.data as CommunityProps[]);
			} catch (error) {
				Swal.fire(alertData.failMessage('데이터를 불러오는데'));
			}
		};

		fetchData();
	}, []);

	useEffect(() => {
		currTab === TabTypes.WRITTEN_POSTS
			? setSelectedData(postData)
			: setSelectedData(commentData);
	}, [currTab, postData, commentData]);

	const handleClickTab = (tab: TabTypes) => {
		setCurrTab(tab);
	};

	const removePost = (postId: string) => {
		setSelectedData(selecteddata.filter((post) => post._id !== postId));
	};
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
					{selecteddata.length === 0 && <p>나의 활동내역이 없습니다</p>}
					{selecteddata.map((data) => {
						return (
							<MyPost
								key={data._id}
								currTab={currTab}
								data={data}
								onRemovePost={removePost}
							/>
						);
					})}
				</Main>
			</Container>
		</>
	);
}

export default MyComment;
