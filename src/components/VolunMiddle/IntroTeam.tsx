import {
	Container,
	TopArea,
	ImgContainer,
	Img,
	Cover,
	TextContainer,
	Team,
	TeamName,
	TextArea,
	TextCover,
	Square,
	SubTitle,
	Content,
	DivideContent,
	BottomContainer,
} from './IntroTeamStyle';
import { dateFormatter } from '@utils/dateUtils';
import { TeamType } from '@src/types/userType';
import phoneNumSplit from '@utils/phoneNumSplit';

type IntroTeamProps = {
	teamData: TeamType;
};

// eslint-disable-next-line react/prop-types
const IntroTeam = ({ teamData }: IntroTeamProps) => {
	const establishDate = dateFormatter(
		teamData.establishmentDate,
		'YYYY년 MM월 DD일',
	);

	const briefHistory = teamData.briefHistory.split('\n');

	return (
		<>
			<Container>
				<TopArea>
					<Cover>
						<ImgContainer>
							<Img src={teamData.image} alt='Team-image' />
						</ImgContainer>
						<TextContainer>
							<Team>{teamData.category}</Team>
							<TeamName>{teamData.teamName}</TeamName>
						</TextContainer>
					</Cover>
				</TopArea>
				<TextArea>
					<DivideContent>
						<TextCover>
							<Square></Square>
							<SubTitle>{teamData.teamName}</SubTitle>
						</TextCover>
						<Content>{teamData.introduction}</Content>
					</DivideContent>

					<DivideContent>
						<TextCover>
							<Square></Square>
							<SubTitle>주요활동과 목적</SubTitle>
						</TextCover>
						<Content>
							{briefHistory.map((content, index) => (
								<p key={index}>{content}</p>
							))}
						</Content>
					</DivideContent>
					<BottomContainer>
						<SubTitle>설립일자</SubTitle>
						<Team>{establishDate}</Team>
					</BottomContainer>
					<BottomContainer>
						<SubTitle>소재지 주소</SubTitle>
						<Team>{teamData.location}</Team>
					</BottomContainer>
					<BottomContainer>
						<SubTitle>전화번호</SubTitle>
						<Team>{phoneNumSplit(teamData.phone)}</Team>
					</BottomContainer>
				</TextArea>
			</Container>
		</>
	);
};

export default IntroTeam;
