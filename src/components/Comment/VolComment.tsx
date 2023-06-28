import React, { useEffect, useState } from 'react';
import { getToken } from '@src/api/token';
import {
	Container,
	Box,
	Title,
	Comment,
	BtnContainer,
	BtnContainer2,
	Btn1,
	Btn2,
	CommentContainer,
	ProfileContainer,
	UserContainer,
	UserName,
	Date,
	Contents,
	CommentHolder,
	CommentArea,
	CommentLength,
	EditCommentArea,
	BtnReport,
	NameContainer,
	NanoId,
	Btn3,
	Img,
} from './CommentStyle';
import { DataType } from '@src/types/dataType';
import { get, post, patch, del } from '@api/api';
import { dateFormatter } from '@src/utils/dateUtils';
import useAuthStore from '@src/store/useAuthStore';
import Swal from 'sweetalert2';
import alertData from '@utils/swalObject';
import throttle from '@utils/throttle.ts';
import { CommentListType, CommentType } from '@src/types/commentType';

const apiURL = import.meta.env.VITE_API_URL;

type CommentProps = {
	postId: string;
};

type UserType = {
	uuid: string;
};

const VolComment: React.FC<CommentProps> = ({ postId }) => {
	const [inputArea, setInputArea] = useState('');
	const [CommentList, setCommentList] = useState<CommentListType>([]);
	const [editingCommentId, setEditingCommentId] = useState('');
	const [editedComment, setEditedComment] = useState('');
	const { userData, getUserData } = useAuthStore();
	const [isLoad, setLoad] = useState<boolean>(false);

	useEffect(() => {
		getUserData();
	}, []);

	useEffect(() => {
		getComments();
	}, []);

	const getComments = async () => {
		const response = await get<DataType>(
			`/api/volunteerComments/${postId}?skip=0&limit=3`,
			{},
		);
		setCommentList(response.data.volunteerCommentList);
	};

	const loadMoreData = async () => {
		try {
			if (!isLoad) {
				const response = await get<DataType>(
					`/api/volunteerComments/${postId}?skip=${CommentList.length}&limit=3`,
					{},
				);
				const newPostListData = response.data.volunteerCommentList;
				setCommentList((prevData) => [...prevData, ...newPostListData]);
				setLoad(response.data.hasMore);
			}
		} catch (error) {
			console.error('Error loading more data:', error);
		}
	};

	// 무한 스크롤
	useEffect(() => {
		if (CommentList.length > 0) {
			const handleScroll = throttle(() => {
				const { scrollTop, offsetHeight } = document.documentElement;
				if (offsetHeight - window.innerHeight - scrollTop < 200) {
					loadMoreData();
				}
			});

			window.addEventListener('scroll', handleScroll);
			return () => window.removeEventListener('scroll', handleScroll);
		}
	}, [CommentList]);

	const handleCommentChange = (
		event: React.ChangeEvent<HTMLTextAreaElement>,
	) => {
		const text = event.target.value;
		if (text.length <= 200) {
			setInputArea(text);
		}
	};

	const handleCommentSubmit = async (
		event: React.MouseEvent<HTMLButtonElement>,
	) => {
		event.preventDefault();

		if (inputArea.trim() === '') {
			return;
		}
		try {
			const token = getToken();
			await post(
				'/api/volunteerComments/',
				{
					volunteer_id: postId,
					content: inputArea,
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				},
			);
			setInputArea('');
			getComments();
		} catch (error) {
			console.log('Error posting comment:', error);
		}
	};

	const handelEditingComment = (comment_id: string) => {
		const comment = CommentList.find(
			(comment: CommentType) => comment._id === comment_id,
		);
		if (comment) {
			setEditingCommentId(comment_id);
			setEditedComment(comment.content);
		}
	};

	const handleEditComment = async (comment_id: string) => {
		if (!editedComment) {
			alert('내용을 입력해주세요');
			return;
		}
		const token = getToken();
		await patch<DataType>(
			`/api/volunteerComments/${comment_id}`,
			{
				content: editedComment,
			},
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			},
		);
		setEditingCommentId('');
		setEditedComment('');
		getComments();
	};

	const handleDeleteComment = async (comment_id: string) => {
		const token = getToken();
		await del<DataType>(
			`/api/volunteerComments/${comment_id}`,

			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			},
		);
		getComments();
	};

	const handleReport = async (comment_id: string) => {
		const token = getToken();
		await patch<DataType>(`/api/volunteerComments/reports/${comment_id}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		Swal.fire(alertData.ReportCompleted);
	};

	return (
		<Container>
			<Title>
				<Box></Box>
				<Comment>댓글 작성</Comment>
			</Title>

			<CommentArea
				value={inputArea}
				onChange={handleCommentChange}
				placeholder='서로 예의를 지키며 아름다운 온라인 문화를 만들어가요'
				maxLength={200}
			/>

			<BtnContainer>
				<CommentLength>{inputArea.length}/200</CommentLength>
				<Btn2 onClick={handleCommentSubmit}>등록</Btn2>
			</BtnContainer>

			<Title>
				<Box></Box>
				<Comment>댓글 목록</Comment>
			</Title>
			{!CommentList || CommentList.length === 0 ? (
				<CommentHolder>등록된 댓글이 없습니다.</CommentHolder>
			) : (
				CommentList &&
				CommentList.map((comment: CommentType) => (
					<CommentContainer key={comment._id}>
						<ProfileContainer>
							<RandomPhoto>
								<Img
									src={`${apiURL}/${comment.user_id.image}`}
									alt='profile-image'
								/>
							</RandomPhoto>
							<UserContainer>
								<NameContainer>
									<UserName>{comment.user_id.nickname}</UserName>
									<NanoId>#{comment.user_id.nanoid}</NanoId>
								</NameContainer>
							</UserContainer>
						</ProfileContainer>
						{editingCommentId === comment._id ? (
							// 수정 중인 댓글 표시
							<>
								<EditCommentArea
									value={editedComment}
									onChange={(e) => setEditedComment(e.target.value)}
									maxLength={200}
								/>
								<BtnContainer2>
									<Btn3 onClick={() => handleEditComment(comment._id)}>
										저장
									</Btn3>
								</BtnContainer2>
							</>
						) : (
							// 수정 중이 아닌 댓글 표시
							<>
								<Contents>{comment.content}</Contents>

								<BtnContainer2>
									{String(comment.user_id.uuid) ===
										String((userData as unknown as UserType)?.uuid) && (
										<Btn1 onClick={() => handelEditingComment(comment._id)}>
											수정
										</Btn1>
									)}
									{String(comment.user_id.uuid) ===
										String((userData as unknown as UserType)?.uuid) && (
										<Btn2 onClick={() => handleDeleteComment(comment._id)}>
											삭제
										</Btn2>
									)}
									{String(comment.user_id.uuid) !==
										String((userData as unknown as UserType)?.uuid) &&
										userData !== null &&
										userData.role !== 'admin' && (
											<BtnReport onClick={() => handleReport(comment._id)}>
												신고
											</BtnReport>
										)}
									{userData !== null && userData.role === 'admin' && (
										<Btn2 onClick={() => handleDeleteComment(comment._id)}>
											삭제
										</Btn2>
									)}
								</BtnContainer2>
							</>
						)}
						<Date>
							{dateFormatter(
								comment.createdAt,
								'YYYY년 MM월 DD일 HH:mm:ss',
								'ko',
							)}
						</Date>
					</CommentContainer>
				))
			)}
		</Container>
	);
};
export default VolComment;
