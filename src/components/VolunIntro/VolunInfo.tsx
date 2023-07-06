import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import { remainingDaysCalculator, getCurrent } from '@utils/dateUtils.ts';
import { dateFormatter } from '@utils/dateUtils.ts';
import { truncateDate } from '@utils/truncateDataFns';
import {
	Title,
	IntroContainer,
	ImgContainer,
	TeamInfo,
	Line,
	InfoBox,
	ApplyBox,
	ButtonContainer,
	Divider,
} from '@src/components/VolunIntro/volunInfo.ts';
import { Badge } from '@components/Card/card';
import star from '@assets/icons/star.svg';
import LargeButton from '../Buttons/LargeButton';
import { useParams } from 'react-router-dom';
import { get, post } from '@api/api';
import { VolunteerDataType } from '@src/types/dataType';
import { DataType } from '@src/types/dataType';
import alertData from '@src/utils/swalObject';
import defaultImg from '@assets/images/기본프로필이미지.webp';

const truncateTitle = (title: string) => {
	if (title.length > 40) {
		const truncatedName = title.slice(0, 40);
		return truncatedName;
	}
	return title;
};

function VolunInfo() {
	const { postId } = useParams() as { postId: string };
	const [volunteerData, setVolunteerData] = useState<VolunteerDataType>();
	const [teamImgData, setTeamImgData] = useState<string>();
	const currentDate = dateFormatter(getCurrent(), 'YYYY-MM-DD');
	const navigate = useNavigate();

	useEffect(() => {
		const fetchData = async () => {
			const responseData = await get<DataType>(`/api/volunteers/${postId}`);
			setVolunteerData(responseData.data.volunteer);
			setTeamImgData(responseData.data.teamAuthInfo.image);
		};
		fetchData();
	}, []);

	const clickApply = async () => {
		try {
			await post('/api/applications', {
				volunteer_id: postId,
			});
			navigate('/mypage/history');
			Swal.fire(alertData.successMessage('참여신청 되었습니다!:)'));
		} catch (err) {
			Swal.fire(alertData.successMessage(String(err)));
		}
	};
	return (
		<>
			{volunteerData && (
				<div>
					<IntroContainer>
						<ImgContainer>
							{teamImgData ? (
								<img src={teamImgData} alt='팀대표이미지' />
							) : (
								<img src={defaultImg} alt='팀대표이미지' />
							)}
							<Badge>{volunteerData.statusName}</Badge>
						</ImgContainer>
						<TeamInfo>
							<Title>{truncateTitle(volunteerData.title)}</Title>
							<Line></Line>
							<InfoBox>
								<ApplyBox>
									<img src={star} alt='스타배지' />
									<h1>현재 {volunteerData.applyCount}명 신청중!</h1>
								</ApplyBox>
								<Divider />
								<p>목표인원 : {volunteerData.registerCount}명</p>
								<p>활동유형 : {volunteerData.actType}</p>
								<p>
									모집기간 : {truncateDate(currentDate)} ~{' '}
									{truncateDate(volunteerData.deadline)} (현재&nbsp;
									{remainingDaysCalculator(currentDate, volunteerData.deadline)}
									일) 남음
								</p>
								<p>
									활동기간 : {truncateDate(volunteerData.startDate)} ~{' '}
									{truncateDate(volunteerData.endDate)}
								</p>
							</InfoBox>
							<ButtonContainer>
								<LargeButton
									onClick={clickApply}
									apply={true}
									disabled={
										volunteerData.applyCount === volunteerData.registerCount
									}>
									{volunteerData.applyCount === volunteerData.registerCount
										? '신청마감'
										: '같이 참여하기'}
								</LargeButton>
							</ButtonContainer>
						</TeamInfo>
					</IntroContainer>
				</div>
			)}
		</>
	);
}

export default VolunInfo;
