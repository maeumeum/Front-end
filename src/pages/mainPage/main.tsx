import React from 'react';

import {
	MainSection, 
	TopSlogan, 
	TopContainer,
	ReviewContainer,  
	IntroducePage, 
	IntroduceTitle, 
	MainTitle, 
	IntroImg, 
	IntroduceDesc, 
	Title, 
	Desc, 
	MidSlogan, 
	VolunteerContainer, 
	CommunityTitle,
	CommunityContainer,
} from './style';
import VolunteerCard from '@components/Card/VolunteerCard';
import ReviewCard from '@components/Card/ReviewCard';
import CommunityCard from '@components/Card/CommunityCard';
import { volunteerList } from '@src/assets/datas/volunteerData';
import { ReviewList } from '@src/assets/datas/volunteerData';
import { communityList } from '@src/assets/datas/volunteerData';
import cardLogo from '@src/assets/icons/cardlogo.svg';

const Main = () => {
	return (
		<MainSection>
			<TopSlogan>당신의 아름다운 걸음을<br />마음이음이 함께합니다.</TopSlogan>
			<TopContainer>
				<ReviewContainer>
					{ReviewList.sort(() => Math.random() - 0.5).slice(0,2).map((item, index) => (
						<ReviewCard data={{ ...item, index }} key={item._id} />
					))}
				</ReviewContainer>
				<IntroducePage>
					<IntroduceTitle>
						<MainTitle>세상에 행복을 나누러<br />한 번 같이 걸어가보실래요?</MainTitle>
						<IntroImg src={cardLogo} alt='cardLogo' />
					</IntroduceTitle>
					<IntroduceDesc>
						<Title>동행을 추구합니다.</Title>
						<Desc>
            마음이음, 봉사로 하나되는 따뜻한 공간입니다. 
            우리는 봉사활동을 모집하고 찾아보며, 함께 봉사하는 이들을 위한 커뮤니티를 만들었습니다. 
            봉사의 소중한 경험을 공유하고 나누며, 마음을 이어가는 마음이음에서 여러분을 기다립니다.
						</Desc>
					</IntroduceDesc>
				</IntroducePage>
			</TopContainer>
			<MidSlogan>시간을 나눠 마음 채우기</MidSlogan>
			<VolunteerContainer>
				{volunteerList.sort(() => Math.random() - 0.5).slice(0,8).map((item) => (
					<VolunteerCard key={item._id} data={item}/>
				))}
			</VolunteerContainer>
			<CommunityTitle>커뮤니티</CommunityTitle>
			<CommunityContainer>
				{communityList.sort(() => Math.random() - 0.5).slice(0, 6).map((item) => (
					<CommunityCard key={item._id} data={item}/>
				))}
			</CommunityContainer>
		</MainSection>
	);
};

export default Main;
