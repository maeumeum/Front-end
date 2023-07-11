import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { get, del, patch } from '@api/api';
import { dateFormatter } from '@src/utils/dateUtils';
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
	Content,
	BtnReport,
	BtnDelete,
	NameBox,
	NanoId,
} from './style.ts';
import CommentSection from '@src/components/Comment/Comment.tsx';
import { DataType } from '@src/types/dataType.ts';
import useAuthStore from '@src/store/useAuthStore.ts';
import Swal from 'sweetalert2';
import alertData from '@src/utils/swalObject.ts';
import { CommunityType } from '@src/types/communityType';

const QuestionDetail = () => {
	const navigate = useNavigate();
	const { postId } = useParams() as { postId: string };
	const [post, setPost] = useState<CommunityType | null>(null);
	const [datauser, setDataUser] = useState<CommunityType | null>(null);
	const [loginUser, setLoginUser] = useState(false);
	const { userData, getUserData } = useAuthStore();

	useEffect(() => {
		const fetchPost = async () => {
			try {
				const response = await get<DataType>(`/api/community/${postId}`);
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
		getUserData();
	}, []);

	useEffect(() => {
		const loginUserLogic = async () => {
			try {
				const response = await get<DataType>(`/api/community/check/${postId}`);
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
			await del<DataType>(`/api/community/${postId}`);
			Swal.fire(alertData.successMessage('게시글이 삭제되었습니다.'));
			navigate('/community/question');
		} catch (error) {
			console.log('Error delecting post:', error);
		}
	};

	if (!post) {
		return <div>Loading...</div>;
	}

	const handleReport = async () => {
		await patch<DataType>(`/api/community/reports/${postId}`);
		Swal.fire(alertData.ReportCompleted);
	};
	const { title, createdAt, images, content } = post;
	const hasPostImage = !!images;
	const formattedDate = dateFormatter(
		createdAt,
		'YYYY년 MM월 DD일 HH:mm:ss',
		'ko',
	);

	let formattedContent: string[] = [];
	if (content) {
		formattedContent = content.split('\n');
	}
	return (
		<>
			<DetailContainer>
				<Header>
					<Title>{title}</Title>
					<SubContainer>
						<InfoBox>
							<NameBox>
								{datauser && (
									<>
										<UserName>{datauser.nickname}</UserName>
										<NanoId> #{datauser.nanoid}</NanoId>
									</>
								)}
							</NameBox>
							<Date>작성일 : {formattedDate}</Date>
						</InfoBox>
						{loginUser && <Btn onClick={handleEdit}>수정하기</Btn>}
						{(loginUser ||
							(userData !== null && userData.role === 'admin')) && (
							<BtnDelete onClick={handleDelete}>삭제하기</BtnDelete>
						)}
						{!loginUser && userData !== null && userData.role !== 'admin' && (
							<BtnReport onClick={handleReport}>신고하기</BtnReport>
						)}
					</SubContainer>
				</Header>
				<Line></Line>
				<ContentContainer>
					{hasPostImage && (
						<div>
							{images.map((image: string, index: number) => (
								<Image key={index} src={image} alt='content-image' />
							))}
						</div>
					)}
					<div>
						<Content>
							{formattedContent.map((item: string, index: number) => (
								<p key={index}>{item}</p>
							))}
						</Content>
					</div>
				</ContentContainer>
			</DetailContainer>
			<CommentSection postId={postId} />
		</>
	);
};

export default QuestionDetail;
