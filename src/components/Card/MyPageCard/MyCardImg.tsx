import { useState, useEffect } from 'react';
import {
	CardContainer,
	ImgBox,
	ContentBox,
	UserInfo,
	Badge,
	VolunInfo,
} from '@components/Card/Card.ts';

import { useNavigate } from 'react-router-dom';
import { TabTypes } from '@src/types/myPageConstants.ts';
import {
	truncateDate,
	truncateCentName,
	splitStatusName,
} from '@utils/truncateDataFns';
import defaultImage from '@src/assets/images/volunteer1.jpg';
import { VolunteerTypes } from '@src/types/myPageConstants.ts';
import check from '@assets/icons/authentication.svg';
import ReviewButton from '@components/Card/MyPageCard/ReviewButton';
import { MyVolunCardProps } from 'src/types/cardType';
import SuggestStatusSelector from './SuggestStatusSelector.tsx';
import AppliedStatusSelector from './AppliedStatusSelector.tsx';

function MyCardImg({ currTab, volunCardData }: MyVolunCardProps) {
	const {
		authorization,
		thumbnail,
		volunId,
		startDate,
		endDate,
		statusName,
		title,
		isReviewed,
		userImage,
		nickname,
		volunApplyId,
	} = volunCardData;

	const url = import.meta.env.VITE_API_URL;

	const navigate = useNavigate();
	const [selectedStatus, setSelectedStatus] = useState<string>(statusName);
	const [isPastEndDate, setIsPastEndDate] = useState(false);

	useEffect(() => {
		const checkEndDate = () => {
			const checkDate = new Date(endDate);
			const now = new Date();
			if (checkDate < now) {
				setSelectedStatus('모집완료');
				setIsPastEndDate(true);
			}
		};
		checkEndDate();
	}, [endDate]);

	const clickNavigate = () => {
		navigate(`/volunteers/ongoing/detail/${volunId}`);
	};

	return (
		<>
			<CardContainer currTab={currTab} statusName={statusName}>
				<ImgBox onClick={clickNavigate}>
					{thumbnail ? (
						<img src={`${url}/${thumbnail}`} alt='게시글 대표이미지' />
					) : (
						<img src={defaultImage} alt='게시글 기본이미지'></img>
					)}
					{currTab === TabTypes.VOLUNTEER_SUGGEST && (
						<Badge currTab={currTab} statusName={selectedStatus}>
							<p
								dangerouslySetInnerHTML={{
									__html: splitStatusName(selectedStatus),
								}}
							/>
						</Badge>
					)}
				</ImgBox>
				<ContentBox>
					<VolunInfo onClick={clickNavigate}>
						<p onClick={clickNavigate}>{title}</p>
						<p>{`활동기간: ${truncateDate(startDate)} ~ ${truncateDate(
							endDate,
						)}`}</p>
					</VolunInfo>

					<UserInfo>
						<img src={`${url}/${userImage}`} alt='작성자 프로필사진' />
						<p>{truncateCentName(nickname)}</p>

						{authorization && (
							<img className='verifyMark' src={check} alt='인증마크' />
						)}

						{currTab === TabTypes.VOLUNTEER_COMPLETED &&
							statusName !== VolunteerTypes.DISCONTINUE &&
							!isReviewed && (
								<ReviewButton
									statusName={statusName}
									isReviewed={isReviewed}
									volunId={volunId}
								/>
							)}

						{currTab === TabTypes.VOLUNTEER_SUGGEST && (
							<SuggestStatusSelector
								selectedStatus={selectedStatus}
								volunId={volunId}
								isPastEndDate={isPastEndDate}
							/>
						)}

						{currTab === TabTypes.VOLUNTEER_APPLIED && (
							<AppliedStatusSelector
								volunId={volunId}
								volunApplyId={volunApplyId}
							/>
						)}
					</UserInfo>
				</ContentBox>
			</CardContainer>
		</>
	);
}

export default MyCardImg;
