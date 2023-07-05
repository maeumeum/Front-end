import { dateFormatter } from '@utils/dateUtils';
import { TeamType } from '@src/types/cardType';
import {
	TeamCardSection,
	TeamImageContainer,
	TeamImage,
	TeamMainContainer,
	TeamName,
	TeamDescContainer,
	WriteDate,
	TeamUserNickname,
} from './card';

interface TeamCardProps {
	teamData: TeamType;
	onClick: () => void;
}

const TeamCard = ({ teamData, onClick }: TeamCardProps) => {
	const date = dateFormatter(teamData.establishmentDate, 'YYYY년 MM월 DD일');

	return (
		<TeamCardSection onClick={onClick}>
			<TeamImageContainer>
				<TeamImage src={teamData.image} alt='volunteerLogo' />
			</TeamImageContainer>
			<TeamMainContainer>
				<TeamName>{`[${teamData.category}] ${teamData.teamName}`}</TeamName>
				<TeamDescContainer>
					<WriteDate>{date}</WriteDate>
					<TeamUserNickname>{teamData.user_id.nickname}</TeamUserNickname>
				</TeamDescContainer>
			</TeamMainContainer>
		</TeamCardSection>
	);
};

export default TeamCard;
