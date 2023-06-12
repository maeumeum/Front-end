import { useState, ChangeEvent } from 'react';
import { IntroContainer, IntroBox } from '@components/Profile/myIntro';
import { InputConatiner } from '@components/Profile/profileImg';
import { BtnConatiner, TitleInput } from '@components/Modal/modal';
import { post } from '@src/api/api';
import LargeButton from '@components/Buttons/LargeButton';
import TopBar from '@components/TopBar/TopBar';
import Swal from 'sweetalert2';
import alertData from '@src/utils/swalObject';
import DataType from '@src/types/dataType';
interface MyReviewProps {
	closeModal: () => void;
	id?: string;
}

function MyReview({ closeModal, id }: MyReviewProps) {
	const [title, setTitle] = useState<string>('');
	const [content, setContent] = useState<string>('');
	const [file, setFile] = useState<File | null>(null);

	const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setContent(e.target.value);
	};

	const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
	};

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFile = e.target.files?.[0];
		if (selectedFile) {
			setFile(selectedFile);
		}
	};

	const volunteer_id = '64868c2c1be4a262d16f6ac4';
	const handleSubmit = async () => {
		if (title === '') {
			Swal.fire(alertData.errorMessage('제목을 입력해주세요!'));
			return;
		} else if (content === '') {
			Swal.fire(alertData.errorMessage('본문을 입력해주세요!'));
			return;
		}

		const formData = new FormData();
		console.log('전송중');
		console.log('아이디 ' + volunteer_id);
		if (volunteer_id) {
			formData.append('volunteer_id', volunteer_id);
		}
		formData.append('title', title);
		formData.append('content', content);
		if (file) {
			formData.append('images', file);
		}

		for (const [key, value] of formData.entries()) {
			console.log(`${key}: ${value}`);
		}

		try {
			const response = await post<DataType>('/api/review', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});
			console.log(response);
			closeModal();
			//해당 리뷰의 상세보기 페이지로 이동
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<TopBar
				modal='modal'
				title={'봉사활동 리뷰작성'}
				text={'다른 사람들과 함께 봉사의 즐거움을 나눠보아요!'}
			/>
			<TitleInput
				placeholder='제목을 입력해주세요.'
				onChange={handleTitleChange}
			/>
			<IntroContainer>
				<IntroBox
					onChange={handleContentChange}
					value={content}
					placeholder='본문을 입력해주세요:)'
				/>
			</IntroContainer>

			<InputConatiner>
				<input
					id='fileInput'
					type='file'
					accept='image/*'
					name='image'
					onChange={handleImageChange}
				/>
			</InputConatiner>

			<BtnConatiner>
				<LargeButton onClick={handleSubmit}>후기 작성하기</LargeButton>
			</BtnConatiner>
		</>
	);
}

export default MyReview;
