import React from 'react';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import alertData from '@utils/swalObject';
import { get } from '@api/api';

import {
	DataType,
	VolunteerWritePageProps,
	PostDataType,
} from '@src/types/dataType';
import {
	WriteTextContainer,
	Container,
	TopTitle,
	DateTitle,
	TitleInput,
	CancelButton,
	SubmitButton,
	ButtonContainer,
	ContentInput,
	TextLength,
	LayoutContainer,
	LayoutChildContainer,
} from '@components/WritePage/WritePageStyle';
import Calendar from '@components/Calendar/Calendar';
import LargeSelector from '@components/Selector/LargeSelector.tsx';
import actTypes from '@src/types/actTypeConstants';
import { Title, TeamType, TeamTypeRadio } from '@pages/myPage/style';
import TeamInfo from '@src/types/writerUserTeamType.ts';
import { useNavigate } from 'react-router-dom';

const VolunteerWritePage = ({ onSave, onCancel }: VolunteerWritePageProps) => {
	const navigate = useNavigate();
	const [postData, setPostData] = useState<PostDataType>({
		content: '',
		inputTitle: '',
		selectedActType: '',
		inputRegisterCount: '',
		teenager: true,
		deadline: new Date(),
		startDate: new Date(),
		endDate: new Date(),
		centName: '',
	});

	useEffect(() => {
		const fetchData = async () => {
			try {
				const getUserInfoData = await get<DataType>('/api/team/auth', {});
				const responseData = getUserInfoData.data as TeamInfo;
				const { teamName } = responseData;
				setPostData({
					...postData,
					centName: teamName,
				});
			} catch (error) {
				Swal.fire(
					alertData.errorMessage(
						'로그인 후 단체 인증이 완료된 유저만 글을 작성할 수 있습니다.',
					),
				);
				navigate('/volunteers/ongoing');
			}
		};
		fetchData();
	}, []);

	const onClickHandler = () => {
		onSave(
			postData.inputTitle,
			postData.content,
			postData.selectedActType,
			postData.inputRegisterCount,
			postData.teenager,
			postData.deadline,
			postData.startDate,
			postData.endDate,
			postData.centName,
		);
		clearContentData();
	};

	const handelInputContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const text = e.target.value;
		if (text.length <= 2000) {
			setPostData({
				...postData,
				content: text,
			});
		}
	};

	const handleInputTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
		const text = e.target.value;
		if (text.length <= 40) {
			setPostData({
				...postData,
				inputTitle: text,
			});
		}
	};

	const handleInputCategory = (selectedValue: string) => {
		setPostData({
			...postData,
			selectedActType: selectedValue,
		});
	};

	const handleInputRegisterCount = (e: React.ChangeEvent<HTMLInputElement>) => {
		const count = e.target.value;
		setPostData({
			...postData,
			inputRegisterCount: count,
		});
	};

	const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setPostData({
			...postData,
			teenager: value === 'teenager',
		});
	};

	const deleteContent = () => {
		clearContentData();
		onCancel();
	};

	const clearContentData = () => {
		setPostData({
			...postData,
			content: '',
			inputTitle: '',
			selectedActType: '',
			inputRegisterCount: '',
			teenager: true,
			deadline: new Date(),
			startDate: new Date(),
			endDate: new Date(),
			centName: '',
		});
	};

	const handleDateChange = (date: Date | null, field: string) => {
		if (date) {
			setPostData((prevData) => ({
				...prevData,
				[field]: date,
			}));
		}
	};

	return (
		<Container className='writePage'>
			<div>
				<TopTitle>제목</TopTitle>
				<TitleInput
					placeholder={`[${postData.centName}]만의 제목을 작성해주세요.`}
					value={postData.inputTitle}
					onChange={handleInputTitle}
					className='writePage'
				/>
			</div>
			<div>
				<Title>미성년자 참여 여부</Title>
				<TeamType>
					<TeamTypeRadio
						type='radio'
						value='teenager'
						checked={postData.teenager}
						onChange={handleRadioChange}
					/>
					나이에 상관없이 모두 신청할 수 있어요.
				</TeamType>
				<TeamType>
					<TeamTypeRadio
						type='radio'
						value='adultOnly'
						checked={!postData.teenager}
						onChange={handleRadioChange}
					/>
					성인만 신청할 수 있어요.
				</TeamType>
			</div>
			<div>
				<Title>카테고리</Title>
				<LargeSelector
					value={postData.selectedActType}
					onChange={handleInputCategory}
					options={[
						{ value: actTypes.OLD, label: '노인' },
						{ value: actTypes.FOOD, label: '급식' },
						{ value: actTypes.ECO, label: '환경' },
						{ value: actTypes.ANIMAL, label: '동물' },
						{ value: actTypes.DISABLE, label: '장애인' },
						{ value: actTypes.SUPPORT, label: '생활편의지원' },
						{ value: actTypes.MEDICAL, label: '의료' },
						{ value: actTypes.EDU, label: '교육' },
					]}
				/>
			</div>
			<div>
				<Title style={{ marginBottom: 0 }}>모집인원</Title>
				<TitleInput
					placeholder='모집인원을 입력해주세요. (숫자만 입력 가능)'
					value={postData.inputRegisterCount}
					onChange={handleInputRegisterCount}
					className='writePage'
				/>
			</div>
			<LayoutContainer>
				<LayoutChildContainer>
					<DateTitle>모집 마감일</DateTitle>
					<Calendar
						selectedDate={postData.deadline}
						setSelectedDate={(date) => handleDateChange(date, 'deadline')}
						category='volunteer'
					/>
				</LayoutChildContainer>
				<LayoutChildContainer>
					<DateTitle>활동 시작일</DateTitle>
					<Calendar
						selectedDate={postData.startDate}
						setSelectedDate={(date) => handleDateChange(date, 'startDate')}
						category='volunteer'
					/>
				</LayoutChildContainer>
				<LayoutChildContainer>
					<DateTitle>활동 종료일</DateTitle>
					<Calendar
						selectedDate={postData.endDate}
						setSelectedDate={(date) => handleDateChange(date, 'endDate')}
						category='volunteer'
					/>
				</LayoutChildContainer>
			</LayoutContainer>
			<WriteTextContainer>
				<ContentInput
					placeholder='봉사활동 주제와 일정을 포함하여 내용을 작성해주세요.&#13;&#10;썸네일을 올려서 활동을 나타내는 대표 이미지를 등록해보세요.'
					value={postData.content}
					onChange={handelInputContent}
					maxLength={2000}
					className='textWrite'
				/>
			</WriteTextContainer>
			<TextLength>{postData.content.length}/2000</TextLength>
			<ButtonContainer>
				<CancelButton onClick={deleteContent}>취소</CancelButton>
				<SubmitButton onClick={onClickHandler}>등록</SubmitButton>
			</ButtonContainer>
		</Container>
	);
};

export default VolunteerWritePage;
