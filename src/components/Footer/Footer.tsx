import { useMediaQuery } from 'react-responsive';

import {
	FooterSection,
	IntroContainer,
	LogoContainer,
	MainLogo,
	SloganContainer,
	Slogan,
	MemberList,
	Member,
	GitLink,
} from './style';

import mainLogo from '@assets/icons/mainlogo.svg';

const Footer = () => {
	const isPc = useMediaQuery({
		query: '(min-width:1024px)',
	});
	const isMobile = useMediaQuery({
		query: '(max-width:1023px)',
	});
	const clickHandler = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<FooterSection>
			<IntroContainer>
				<LogoContainer onClick={clickHandler}>
					<MainLogo src={mainLogo} alt='mainLogo' />
				</LogoContainer>
				<SloganContainer>
					<Slogan>
						마음을 잇는 봉사 <br />
						마음이음에서 흔적을 남겨보세요
					</Slogan>
					{isPc && (
						<MemberList>
							{members.map((member: { name: string; link: string }) => {
								return (
									<Member key={member.link}>
										<GitLink href={member.link}>{member.name}</GitLink>
									</Member>
								);
							})}
						</MemberList>
					)}
				</SloganContainer>
			</IntroContainer>
			{isMobile && (
				<MemberList>
					{members.map((member: { name: string; link: string }) => {
						return (
							<Member key={member.link}>
								<GitLink href={member.link}>{member.name}</GitLink>
							</Member>
						);
					})}
				</MemberList>
			)}
		</FooterSection>
	);
};

export default Footer;

const members = [
	{
		name: '김마리나',
		link: 'https://github.com/KIMANIRAM',
	},
	{
		name: '류이서',
		link: 'https://github.com/ryuiseo',
	},
	{
		name: '류한나',
		link: 'https://github.com/hanna-ryu',
	},
	{
		name: '이해인',
		link: 'https://github.com/LHI0915',
	},
	{
		name: '정혜린',
		link: 'https://github.com/02rynn',
	},
	{
		name: '최윤재',
		link: 'https://github.com/uniqueeest',
	},
	{
		name: '탁경진',
		link: 'https://github.com/Takkyou',
	},
];
