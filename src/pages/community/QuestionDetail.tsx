import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { get, del, patch } from '@api/api';
import { getToken } from '@api/token';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import {
	DetailContainer,
	Header,
	Title,
	SubContainer,
	InfoBox,
	UserName,
	Date,
	Btn,
	Line,
	ContentContainer,
	Image,
	Contentdiv,
	Content,
	BtnReport,
} from './style.ts';
import CommentSection from '@src/components/Comment/Comment.tsx';
import DataType from '@src/types/dataType.ts';

const QuestionDetail = () => {
	const navigate = useNavigate();
	const { postId } = useParams() as { postId: string };
	const [post, setPost] = useState<any>([]);
	const [datauser, setDataUser] = useState<any>('');
	const [loginUser, setLoginUser] = useState(false);

	useEffect(() => {
		const fetchPost = async () => {
			try {
				const token = getToken();
				const response = await get<DataType>(`/api/community/${postId}`, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});
				setPost(response.data.post.post);
				setDataUser(response.data.post);
			} catch (error) {
				console.error('Error fetching post:', error);
			}
		};
		fetchPost();
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const loginUserLogic = async () => {
			try {
				const token = getToken();
				const response = await get<DataType>(`/api/community/check/${postId}`, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});
				setLoginUser(response.data);
				console.log(response);
			} catch (error) {
				console.error('Error fetching post:', error);
			}
		};
		loginUserLogic();
	}, []);

	const handleEdit = () => {
		navigate(`/community/question/edit/${postId}`, {
			state: { postId },
		});
	};

	const handleDelete = async () => {
		try {
			const token = getToken();
			await del<DataType>(`/api/community/${postId}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			navigate('/community/question');
		} catch (error) {
			console.log('Error delecting post:', error);
		}
	};

	if (!post) {
		return <div>Loading...</div>;
	}

	const handleReport = async () => {
		const token = getToken();
		await patch<DataType>(`/api/community/reports/${postId}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	};
	const { title, createdAt, images, content } = post;
	const hasPostImage = !!images;
	const formattedDate = dayjs(createdAt)
		.locale('ko')
		.format('YYYY년 MM월 DD일 HH:mm:ss');

	return (
		<>
			<DetailContainer>
				<Header>
					<Title>{title}</Title>
					<SubContainer>
						<InfoBox>
							<UserName>{datauser}</UserName>
							<Date>작성일 : {formattedDate}</Date>
						</InfoBox>
						{loginUser && <Btn onClick={handleEdit}>수정하기</Btn>}
						{loginUser && <Btn onClick={handleDelete}>삭제하기</Btn>}
						{!loginUser && (
							<BtnReport onClick={handleReport}>신고하기</BtnReport>
						)}
					</SubContainer>
				</Header>
				<Line></Line>
				<ContentContainer>
					{hasPostImage && (
						<div>
							{images.map((image: any, index: any) => (
								<Image
									key={index}
									src={`http://localhost:5002/${image}`}
									alt='content-image'
								/>
							))}
						</div>
					)}
					<Contentdiv>
						<Content>{content}</Content>
					</Contentdiv>
				</ContentContainer>
			</DetailContainer>
			<CommentSection postId={postId} />
		</>
	);
};

export default QuestionDetail;
