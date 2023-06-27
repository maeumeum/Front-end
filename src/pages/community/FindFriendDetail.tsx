import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { get, del, patch } from '@api/api';
import { getToken } from '@api/token';
import { dateFormatter } from '@utils/dateUtils.ts';
import alertData from '@utils/swalObject.ts';
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
	BtnDelete,
	BtnReport,
	NanoId,
	NameBox,
} from './style.ts';
import CommentSection from '@components/Comment/Comment.tsx';
import { DataType } from '@src/types/dataType.ts';
import useAuthStore from '@src/store/useAuthStore.ts';
import { CommunityType } from '@src/types/communityType';

const apiURL = import.meta.env.VITE_API_URL;

const FindFriendDetail = () => {
	const navigate = useNavigate();
	const { postId } = useParams() as { postId: string };
	const [post, setPost] = useState<CommunityType | null>(null);
	const [datauser, setDataUser] = useState<CommunityType | null>(null);
	const [loginUser, setLoginUser] = useState(false);
	const { userData, getUserData } = useAuthStore();

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
				setDataUser(response.data.post.post.user_id);
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
				const token = getToken();
				const response = await get<DataType>(`/api/community/check/${postId}`, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});
				setLoginUser(response.data);
			} catch (error) {
				console.error('Error fetching post:', error);
			}
		};
		loginUserLogic();
	}, []);

	const handleEdit = () => {
		navigate(`/community/edit/${postId}`, {
			state: { postId },
		});
	};

	const handleReport = async () => {
		const token = getToken();
		await patch<DataType>(`/api/community/reports/${postId}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		Swal.fire(alertData.ReportCompleted);
	};

	const handleDelete = async () => {
		try {
			const token = getToken();
			await del<DataType>(`/api/community/${postId}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			Swal.fire(alertData.successMessage('게시글이 삭제되었습니다.'));
			navigate('/community/findfriend');
		} catch (error) {
			console.log('Error delecting post:', error);
		}
	};

	if (!post) {
		return <div>Loading...</div>;
	}

	const { title, createdAt, images, content } = post;

	const hasPostImage = !!images && images.length > 0;
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
								<Image
									key={index}
									src={`${apiURL}/${image}`}
									alt='content-image'
								/>
							))}
						</div>
					)}
					{/* <Contentdiv> */}
					<Content>
						{formattedContent.map((item: string, index: number) => (
							<p key={index}>{item}</p>
						))}
					</Content>
					{/* </Contentdiv> */}
				</ContentContainer>
			</DetailContainer>
			<CommentSection postId={postId} />
		</>
	);
};

export default FindFriendDetail;
