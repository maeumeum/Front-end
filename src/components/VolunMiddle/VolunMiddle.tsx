import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { get } from '@api/api';
import { DataType } from '@src/types/dataType';
import { VolunteerType, TeamType } from '@src/types/cardType';
import VolComment from '../Comment/VolComment';
import ActivityIntro from './ActivityIntro';
import IntroTeam from './IntroTeam';
import {
	Container,
	Header,
	ActiveBtn,
	Text,
	TeamIntroBtn,
	CommentBtn,
} from './VolunMiddleStyle';

const VolunMiddle = () => {
	const { postId } = useParams() as { postId: string };
	const [activeTab, setActiveTab] = useState('activityIntro');
	const [volunteerData, setVolunteerData] = useState<VolunteerType>();
	const [teamData, setTeamData] = useState<TeamType>();

	const handleTabChange = (tabName: string) => {
		setActiveTab(tabName);
	};

	useEffect(() => {
		const fetchData = async () => {
			const responseData = await get<DataType>(`/api/volunteers/${postId}`);
			setVolunteerData(responseData.data.volunteer);
			setTeamData(responseData.data.teamAuthInfo);
		};
		fetchData();
	}, []);

	return (
		<>
			<Container>
				<Header>
					<ActiveBtn onClick={() => handleTabChange('activityIntro')}>
						<Text>활동소개</Text>
					</ActiveBtn>
					<TeamIntroBtn onClick={() => handleTabChange('introTeam')}>
						<Text>팀소개</Text>
					</TeamIntroBtn>
					<CommentBtn onClick={() => handleTabChange('comment')}>
						<Text>댓글</Text>
					</CommentBtn>
				</Header>
				{activeTab === 'activityIntro' && volunteerData && (
					<ActivityIntro volunteerData={volunteerData} />
				)}
				{activeTab === 'introTeam' && teamData && (
					<IntroTeam teamData={teamData} />
				)}
				{activeTab === 'comment' && <VolComment postId={postId} />}
			</Container>
		</>
	);
};

export default VolunMiddle;
