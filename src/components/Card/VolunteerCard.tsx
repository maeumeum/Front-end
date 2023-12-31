import { VolunteerType } from '@src/types/cardType';

import {
	VolunteerSection,
	VolunteerImgContainer,
	VolunteerImage,
	RecruitStatus,
	VolunteerIntroContainer,
	VolunteerTitle,
	VolunteerContent,
} from '@components/Card/card';

interface VolunteerCardProps {
	volunteerData: VolunteerType;
	onClick: React.MouseEventHandler<HTMLDivElement>;
}

import imgData from '@assets/images/volunteer1.webp';

const VolunteerCard = ({ volunteerData, onClick }: VolunteerCardProps) => {
	const volunteerImg = `${volunteerData.images[0]}`;
	return (
		<VolunteerSection onClick={onClick}>
			<VolunteerImgContainer>
				{/* <VolunteerImage src={volunteerImg ? volunteerImg : imgData} /> */}
				{volunteerData.images.length > 0 ? (
					<VolunteerImage src={volunteerImg} alt='Logo' />
				) : (
					<VolunteerImage src={imgData} alt={'게시글 기본이미지'} />
				)}
			</VolunteerImgContainer>
			<RecruitStatus className={volunteerData.statusName}>
				{volunteerData.statusName}
			</RecruitStatus>
			<VolunteerIntroContainer>
				<VolunteerTitle>{volunteerData.title}</VolunteerTitle>
				<VolunteerContent>
					{volunteerData.register_user_id.nickname}
				</VolunteerContent>
			</VolunteerIntroContainer>
		</VolunteerSection>
	);
};

export default VolunteerCard;
