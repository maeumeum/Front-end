import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import {
	Container,
	Main,
	MenuBar,
	TabMenu,
} from '@components/MyPage/myPage.ts';
import Menu from '@components/Menu/Menu.tsx';
import InputForm from '@components/UserForm/InputForm';
import TextAreaForm from '@components/UserForm/TextAreaForm';
import Calendar from '@components/Calendar/Calendar';
import LargeButton from '@components/Buttons/LargeButton';
import UploadTeamImg from '@components/Profile/TeamImg';
import Tab from '@components/Tab/Tab.tsx';
import alertData from '@utils/swalObject';
import { validPhoneNum } from '@utils/signUpCheck.ts';
import { DataType } from '@src/types/dataType';
import { TabTypes } from '@src/types/myPageConstants';
import { post, get } from '@api/api';
import useSummitStore from '@src/store/useSummitStore';
import {
	teamNameError,
	introduceError,
	briefHistoryError,
	phoneNumError,
	locationError,
} from '@src/utils/errorMessage';
import {
	TeamForm,
	TopTitle,
	Title,
	TeamType,
	TeamTypeRadio,
	MainContainer,
	ButtonContainer,
	WaitMessage,
	InfoMessage,
} from './style';
import hug from '@assets/images/jug.webp';

const AuthTeam = () => {
	const [category, setCategory] = useState<string>('');
	const [teamName, setTeamName] = useState<string>('');
	const [date, setDate] = useState<Date>(new Date());
	const [file, setFile] = useState<File | null>(null);
	const [introduction, setIntroduction] = useState<string>('');
	const [briefHistory, setBriefHistory] = useState<string>('');
	const [location, setLocation] = useState<string>('');
	const [phoneNum, setPhoneNum] = useState<string>('');
	const [submit, setSubmit] = useState<boolean>(false);
	const [isAuthorizaion, isSetAuthorizaion] = useState<boolean>(false);

	const tabs = [TabTypes.GROUP_CERTIFICATION];
	const { isSubmit, setIsSubmit } = useSummitStore();
	const navigate = useNavigate();

	//제출 여부 확인
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await get<DataType>('/api/users/info');
				isSetAuthorizaion(response.data.authorization);
			} catch (error) {
				console.log(error);
			} finally {
				setIsSubmit();
			}
		};
		fetchData();
	}, []);
	// inputValue 함수
	const getFormChanger =
		(setter: React.Dispatch<React.SetStateAction<string>>) =>
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setSubmit(false);
			setter(e.target.value);
		};

	const clickHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
		// 상태 초기화
		setSubmit(false);
		e.preventDefault();
		setSubmit(true);

		// 팀 정보 저장
		const formData = new FormData();
		const establishment = date.toISOString();
		formData.append('category', category);
		formData.append('teamName', teamName);
		formData.append('introduction', introduction);
		formData.append('briefHistory', briefHistory);
		formData.append('establishmentDate', establishment);
		formData.append('phone', phoneNum);
		formData.append('location', location);
		if (file) {
			formData.append('image', file);
		}
		await post<DataType>('/api/team/auth', formData, {});
		navigate('/mypage');
		Swal.fire(alertData.waitTeamCert);
	};

	return (
		<Container>
			<MenuBar>
				<Menu title={'마이페이지'} />
			</MenuBar>
			<Main>
				<TabMenu>
					<Tab tabs={tabs} />
				</TabMenu>

				{isAuthorizaion ? (
					<InfoMessage>
						<img
							src={hug}
							alt='인증유저'
							style={{ width: '30rem', height: '30rem' }}
						/>
						<h1>이미 인증된 유저입니다.</h1>
						<h1>문의사항은 관리자에게 연락주세요:)</h1>
						<h2>maum.elice@gmail.com</h2>
					</InfoMessage>
				) : (
					<>
						<TeamForm>
							<MainContainer>
								{isSubmit && (
									<WaitMessage>
										<h1>현재 관리자가 검토중입니다. 조금만 기다려주세요:)</h1>
									</WaitMessage>
								)}

								<TopTitle>팀 유형</TopTitle>
								<TeamType>
									<TeamTypeRadio
										type='radio'
										name='category'
										value='기관'
										onChange={getFormChanger(setCategory)}
									/>
									기관
								</TeamType>
								<TeamType>
									<TeamTypeRadio
										type='radio'
										name='category'
										value={'개인/동아리'}
										onChange={getFormChanger(setCategory)}
									/>
									개인/동아리
								</TeamType>
								<Title>프로젝트 팀명</Title>
								<InputForm
									submit={submit}
									inputType='text'
									name='long'
									placeholder='프로젝트 팀명을 입력해주세요.'
									value={teamName}
									onChangeFn={getFormChanger(setTeamName)}
									errorMessage={teamNameError}
								/>
								<Title>대표 이미지 등록</Title>
								<UploadTeamImg setFile={setFile} />
								<Title>설립일</Title>
								<Calendar
									selectedDate={date}
									setSelectedDate={(prevDate: Date | null) =>
										setDate(prevDate as Date)
									}
									category='teamAuth'
								/>
								<Title>프로젝트 팀 소개</Title>
								<TextAreaForm
									submit={submit}
									name='introduction'
									placeholder='프로젝트 팀 소개 문구를 1~3줄로 적어주세요.'
									value={introduction}
									onChangeFn={getFormChanger(setIntroduction)}
									errorMessage={introduceError}
								/>
								<Title>주요 활동과 목적</Title>
								<TextAreaForm
									submit={submit}
									name='briefHistory'
									placeholder='프로젝트 팀이 기존에 진행하고 있는 활동의 분야, 목적, 내용을 상세히 작성해주세요.'
									value={briefHistory}
									onChangeFn={getFormChanger(setBriefHistory)}
									errorMessage={briefHistoryError}
								/>
								<Title>전화번호</Title>
								<InputForm
									submit={submit}
									inputType='text'
									name='long'
									placeholder='전화번호를 입력해주세요.'
									value={phoneNum}
									onChangeFn={getFormChanger(setPhoneNum)}
									errorMessage={phoneNumError}
									validFn={validPhoneNum}
								/>
								<Title>소재지 주소</Title>
								<InputForm
									submit={submit}
									inputType='text'
									name='long'
									placeholder='소재지 주소를 입력해주세요.'
									value={location}
									onChangeFn={getFormChanger(setLocation)}
									errorMessage={locationError}
								/>
							</MainContainer>
							<ButtonContainer>
								<LargeButton
									isMyPage={'mypage'}
									onClick={clickHandler}
									disabled={isSubmit ? true : false}>
									제출하기
								</LargeButton>
							</ButtonContainer>
						</TeamForm>
					</>
				)}
			</Main>
		</Container>
	);
};

export default AuthTeam;
