import { useState } from 'react';
import Swal from 'sweetalert2';
import alertData from '@src/utils/swalObject.ts';
import VolunteerWritePage from '@components/WritePage/VolunteerWritePage';
import { post } from '@api/api';
import { getToken } from '@api/token';
import { useNavigate } from 'react-router-dom';
import { WriteImageArea, Container, WriteMiddleContainer } from './style';
import actTypes from '@src/types/actTypeConstants';
import TopBar from '@components/TopBar/TopBar';

const VolunteerWrite = () => {
	const navigate = useNavigate();
	const [selectedImage, setSelectedImage] = useState<File[]>([]);
	const [_, setPostData] = useState({
		title: '',
		content: '',
		actTypeName: '',
		registerCount: '',
		teenager: true,
		deadline: new Date(),
		startDate: new Date(),
		endDate: new Date(),
		teamName: '',
	});

	const handelImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const chosenFiles = e.target.files;
		if (chosenFiles) {
			setSelectedImage((prevFiles) => [
				...prevFiles,
				...Array.from(chosenFiles),
			]);
		}
	};

	//
	const onSavePost = async (
		title: string,
		content: string,
		actTypeName: string,
		registerCount: string,
		teenagerData: boolean,
		deadlineDate: Date,
		startDateData: Date,
		endDateData: Date,
		teamName: string,
	) => {
		try {
			setPostData({
				title,
				content,
				actTypeName,
				registerCount,
				teenager: teenagerData,
				deadline: deadlineDate,
				startDate: startDateData,
				endDate: endDateData,
				teamName,
			});

			const token = getToken();
			const formData = new FormData();
			const deadline = deadlineDate.toISOString();
			const startDate = startDateData.toISOString();
			const endDate = endDateData.toISOString();
			const teenager = teenagerData.toString();

			formData.append('title', title);
			formData.append('content', content);
			formData.append('registerCount', registerCount);
			if (actTypeName === '') {
				actTypeName = actTypes.OLD;
				formData.append('actType', actTypeName);
			} else {
				formData.append('actType', actTypeName);
			}
			formData.append('statusName', '모집중');
			formData.append('deadline', deadline);
			formData.append('startDate', startDate);
			formData.append('endDate', endDate);
			formData.append('teenager', teenager);
			formData.append('teamName', teamName);
			for (let i = 0; i < selectedImage.length; i++) {
				formData.append('images', selectedImage[i]);
			}
			await post('/api/volunteers', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
					Authorization: `Bearer ${token}`,
				},
			});
			navigate('/volunteers/ongoing');
		} catch (error) {
			Swal.fire(
				alertData.errorMessage('빠진 내용이 없는지 다시한번 확인해주세요.'),
			);
			navigate('/volunteers/ongoing/edit');
		}
	};

	const onCancelPost = () => {
		setPostData({
			title: '',
			content: '',
			actTypeName: '',
			registerCount: '',
			teenager: true,
			deadline: new Date(),
			startDate: new Date(),
			endDate: new Date(),
			teamName: '',
		});
		navigate('/volunteers/ongoing');
	};

	return (
		<>
			<Container>
				<WriteMiddleContainer>
					<TopBar
						title={'글 작성하기'}
						text={'우리 단체의 봉사활동을 홍보해요'}
					/>
				</WriteMiddleContainer>
				<VolunteerWritePage onSave={onSavePost} onCancel={onCancelPost} />
				<WriteImageArea>
					이미지업로드
					<input
						id='fileInput'
						type='file'
						accept='image/*'
						name='image'
						multiple
						onChange={handelImageChange}
					/>
				</WriteImageArea>
			</Container>
		</>
	);
};

export default VolunteerWrite;
