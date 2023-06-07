import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from '@components/TopBar/TopBar.tsx';
import SearchBar from '@components/SearchBar/SearchBar.tsx';
import TotalPostNumber from '@components/TotalPostNumber/TotalPostNumber.tsx';
import WriteButton from '@components/Buttons/WriteButton/WriteButton.tsx';
import { NumberWriteContainer, PageContainer } from './style.ts';
import PostList from '@components/PostList/PostList.tsx';
import Menu from '@components/Menu/Menu.tsx';
import { MenuBar } from '@components/MyPage/myPage.ts';
import { get } from '@src/api/Api';
import { getToken } from '@src/api/Token';

type PostData = {
	id: string;
	title: string;
	content: string;
};
const FindFriend = () => {
	const navigate = useNavigate();
	const [postListData, setPostListData] = useState<PostData[]>([]);

	useEffect(() => {
		fetchPostList();
	}, []);

	const fetchPostList = async () => {
		try {
			const token = getToken();
			const response = await get<PostData[]>('/api/community', {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			setPostListData(response);
		} catch (error) {
			console.error('Error fetching post list:', error);
		}
	};

	const handleSearch = (query: string) => {
		// 검색기능 구현 로직 작성예정
		console.log('검색어:', query);
	};

	const navigateWrite = () => {
		navigate('/community/findfriend/write');
	};

	return (
		<>
			<MenuBar>
				<Menu title={'커뮤니티'} />
			</MenuBar>
			<PageContainer>
				<TopBar title='동행 구해요' text='같이 봉사할 친구를 모집해요' />
				<SearchBar onSearch={handleSearch} />
				<NumberWriteContainer>
					<TotalPostNumber totalPosts={postListData.length} />
					<WriteButton toNavigate={navigateWrite} />
				</NumberWriteContainer>
				{postListData.map((postData) => (
					<PostList
						key={postData.id}
						postTitle={
							postData.title.slice(0, 50) +
							(postData.title.length > 50 ? '...' : '')
						}
						postContents={
							postData.content.slice(0, 50) +
							(postData.content.length > 50 ? '...' : '')
						}
					/>
				))}
			</PageContainer>
		</>
	);
};

export default FindFriend;
