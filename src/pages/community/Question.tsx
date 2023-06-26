import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '@components/SearchBar/SearchBar.tsx';
import WriteButton from '@components/Buttons/WriteButton/WriteButton.tsx';
import {
	NumberWriteContainer,
	PageContainer,
	QuestionMainContainer,
	FFImageArea,
	MainTitle,
	Subtitle,
	TextArea,
	MenuBar,
	MiddleContainer,
	BigText,
	Sub,
	Highlight,
	BottomArea,
	SearchContainer,
} from './style.ts';
import PostList from '@components/PostList/PostList.tsx';
import Menu from '@components/Menu/Menu.tsx';
import questionImage from '@assets/images/questionImage.webp';
import { get } from '@api/api';
import DataType from '@src/types/dataType.ts';
import throttle from '@utils/throttle.ts';

type PostData = {
	_id: string;
	title: string;
	content: string;
};
const Question = () => {
	const navigate = useNavigate();
	const [postListData, setPostListData] = useState<PostData[]>([]);
	const [query, setQuery] = useState<string>('');
	const [isLoad, setLoad] = useState<boolean>(false);

	useEffect(() => {
		const fetchPostList = async () => {
			const response = await get<DataType>(
				'/api/community/category/qna?skip=0&limit=10',
				{},
			);
			setPostListData(response.data.categoryPost);
			setLoad(response.data.hasMore);
		};
		fetchPostList();
		window.scrollTo(0, 0);
	}, []);

	const loadMoreData = async () => {
		try {
			if (!isLoad) {
				if (query === '') {
					const response = await get<DataType>(
						`/api/community/category/qna?skip=${postListData.length}&limit=10`,
						{},
					);
					const newPostListData = response.data.categoryPost;
					setPostListData((prevData) => [...prevData, ...newPostListData]);
					setLoad(response.data.hasMore);
				} else {
					const response = await get<DataType>(
						`/api/community/search?keyword=${query}&posttype=qna?skip=${postListData.length}&limit=5`,
						{},
					);
					const newPostListData = response.data;
					setPostListData((prevData) => [...prevData, ...newPostListData]);
					setLoad(response.data.hasMore);
				}
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

	const handleSearch = async (query: string) => {
		const response = await get<DataType>(
			`/api/community/search?keyword=${query}&posttype=qna&skip=0&limit=5`,
		);
		setPostListData(response.data);
		setQuery(query);
	};

	const navigateWrite = () => {
		navigate('/community/question/write');
	};
	const navigateDetail = (postId: string) => {
		navigate(`/community/${postId}`);
	};

	return (
		<>
			<PageContainer>
				<QuestionMainContainer>
					<TextArea>
						<MainTitle>마음이음</MainTitle>
						<Subtitle>
							마음이음은 동행을 추구합니다.
							<br />
							함께 봉사하는 이들을 위한 커뮤니티에서 소중한 경험을 공유하고
							마음을 이어보세요!
						</Subtitle>
					</TextArea>

					<FFImageArea src={questionImage} alt='question-image' />
				</QuestionMainContainer>

				<MiddleContainer>
					<BigText>궁금해요</BigText>
					<Sub>
						<p>궁금한 사항을 공유하고 새로운 정보를 얻어요</p>
						<p>
							<Highlight>
								제목에 궁금한 사항의 키워드를 포함하면 더욱 많은 댓글을 받을 수
								있어요
							</Highlight>
						</p>
					</Sub>
				</MiddleContainer>
				<SearchContainer>
					<MenuBar>
						<Menu title={'커뮤니티'} />
					</MenuBar>
					<BottomArea>
						<SearchBar onSearch={handleSearch} />
						<NumberWriteContainer>
							<WriteButton toNavigate={navigateWrite} />
						</NumberWriteContainer>
						{postListData !== null &&
							postListData.length > 0 &&
							postListData.map((postData) => (
								<PostList
									key={postData._id}
									postTitle={
										postData.title.slice(0, 50) +
										(postData.title.length > 50 ? '...' : '')
									}
									postContents={
										postData.content.slice(0, 200) +
										(postData.content.length > 200 ? '...' : '')
									}
									onClick={() => navigateDetail(postData._id)}
								/>
							))}
					</BottomArea>
				</SearchContainer>
			</PageContainer>
		</>
	);
};

export default Question;
