import TopBar from '@components/TopBar/TopBar.tsx';
import SearchBar from '@components/SearchBar/SearchBar.tsx';
import TotalPostNumber from '@components/TotalPostNumber/TotalPostNumber.tsx';
import PostList from '@components/PostList/PostList.tsx';
import {
	NumberWriteContainer,
	ReviewPageContainer,
} from '@src/pages/community/style';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { get } from '@src/api/api';
import DataType from '@src/types/dataType';
import throttle from '@utils/throttle.ts';

type PostData = {
	_id: string;
	title: string;
	content: string;
};
const reviewPage = () => {
	const navigate = useNavigate();
	const [postListData, setPostListData] = useState<PostData[]>([]);
	const [isLoad, setLoad] = useState<boolean>(false);

	useEffect(() => {
		const fetchPostList = async () => {
			const response = await get<DataType>('/api/review?skip=0&limit=10');
			setPostListData(response.data.reviews);
			console.log('리뷰', response);
		};
		fetchPostList();
	}, []);

	const loadMoreData = async () => {
		try {
			if (!isLoad) {
				console.log(postListData.length);
				const response = await get<DataType>(
					`/api/review?skip=${postListData.length}&limit=10`,
					{},
				);
				const newPostListData = response.data.reviews;
				setPostListData((prevData) => [...prevData, ...newPostListData]);
				setLoad(response.data.hasMore);
			}
		} catch (error) {
			console.error('Error loading more data:', error);
		}
	};

	useEffect(() => {
		if (postListData.length > 0) {
			const handleScroll = throttle(() => {
				const { scrollTop, offsetHeight } = document.documentElement;
				if (offsetHeight - window.innerHeight - scrollTop < 200) {
					loadMoreData();
				}
			});

			window.addEventListener('scroll', handleScroll);
			return () => window.removeEventListener('scroll', handleScroll);
		}
	}, [postListData]);

	const navigateDetail = (postId: string) => {
		navigate(`/review/${postId}`);
	};

	const handleSearch = async (query: string) => {
		const response = await get<DataType>(`/api/review/search?keyword=${query}`);
		setPostListData(response.data);
	};

	return (
		<>
			<ReviewPageContainer>
				<TopBar title='봉사후기 게시판' text='생생한 봉사후기를 공유해요' />
				<SearchBar onSearch={handleSearch} />
				<NumberWriteContainer>
					<TotalPostNumber totalPosts={postListData.length} />
				</NumberWriteContainer>
				{postListData &&
					postListData.map((postData) => (
						<PostList
							key={postData._id}
							postTitle={
								postData.title.slice(0, 50) +
								(postData.title.length > 50 ? '...' : '')
							}
							postContents={
								postData.content.slice(0, 50) +
								(postData.content.length > 50 ? '...' : '')
							}
							onClick={() => navigateDetail(postData._id)}
						/>
					))}
			</ReviewPageContainer>
		</>
	);
};

export default reviewPage;
