import styled, { css } from 'styled-components';
import { TabTypes, VolunteerTypes } from '@src/types/myPageConstants';
import { hexToRgba } from '@utils/styleUtils.ts';

export interface CardProps {
	currTab?: string;
	statusName?: string;
	applyCount?: string;
}

export const CardContainer = styled.div<CardProps>`
	display: flex;
	flex-direction: column;
	width: 100%;
	min-height: 42.9rem;
	border-radius: ${({ theme }) => theme.radius.s2};
	background-color: ${({ theme }) => theme.colors.background};
	flex-wrap: nowrap;

	@media (max-width: 768px) {
		min-height: 15rem;
		width: 90%;
	}

	@media (max-width: 360px) {
		min-height: 15rem;
		width: 70%;
		margin: 0 auto;
	}
`;

export const ImgBox = styled.div`
	position: relative;
	overflow: hidden;
	cursor: pointer;
	img {
		width: 26rem;
		height: 26.5rem;
		border-radius: ${({ theme }) => theme.radius.s1};
	}

	@media (max-width: 768px) {
		overflow: hidden;
		width: 100%;
		height: 20rem;
		img {
			width: 100%;
			height: 20rem;
		}
	}
`;

export const ContentBox = styled.div`
	font-weight: ${({ theme }) => theme.typography.weight.bold};
	display: flex;
	flex-direction: column;
	padding: 1rem;
`;

export const VolunInfo = styled.div`
	height: 82px;
	cursor: pointer;
	p {
		word-break: keep-all;
		font-size: ${({ theme }) => theme.typography.size.default};
		line-height: 2.4rem;
		letter-spacing: -0.1px;
		text-align: left;
		height: 20px;
	}
	p + p {
		position: absolute;
		font-weight: 500;
		font-size: ${({ theme }) => theme.typography.size.subparagraph};
		color: #999b9c;
	}

	@media (max-width: 768px) {
		p {
			font-size: ${({ theme }) => theme.typography.size.paragraph};
		}
		p + p {
			font-weight: 500;
			font-size: ${({ theme }) => theme.typography.size.subparagraph};
		}
	}
`;

export const UserInfo = styled.div`
	display: flex;
	align-items: center;
	height: 0%;
	margin-top: 3rem;
	position: relative;

	img {
		width: 3.3rem;
		height: 3.3rem;
		border-radius: 50%;
	}

	img.verifyMark {
		width: 15px;
		height: 15px;
	}

	p {
		margin-left: 1rem;
		font-weight: 500;
		font-size: ${({ theme }) => theme.typography.size.paragraph};
		display: flex;
		align-items: center;
	}
`;

export const Badge = styled.div<CardProps>`
	background: linear-gradient(#f08b7a, var(--button--color));
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${({ theme }) => theme.colors.background};
	font-size: ${({ theme }) => theme.typography.size.paragraph};
	position: absolute;
	width: 50px;
	height: 50px;
	left: 2rem;
	top: 2rem;
	border-radius: 50%;
	p {
		font-weight: bolder;
		word-break: normal;
		text-align: center;
	}
	${({ currTab }) =>
		currTab === TabTypes.VOLUNTEER_COMPLETED &&
		css`
			background: rgba(32, 32, 32, 0.8);
		`}
	${({ statusName }) =>
		(statusName === VolunteerTypes.COMPLETED ||
			statusName === VolunteerTypes.DISCONTINUE) &&
		css`
			background: rgba(32, 32, 32, 0.8);
		`}

  @media (max-width: 768px) {
		width: 30px;
		height: 30px;
		font-size: ${({ theme }) => theme.typography.size.subparagraph};
		left: 1rem;
		top: 1rem;
	}

	@media (max-width: 360px) {
		width: 30px;
		height: 30px;
		font-size: ${({ theme }) => theme.typography.size.subparagraph};
		left: 2rem;
		top: 3rem;
	}
`;

export const Button = styled.button`
	border: none;
	background-color: var(--button--color);
	color: ${({ theme }) => theme.colors.background};
	height: 4.4rem;
	border-radius: 5%;
	cursor: pointer;
`;

export const ButtonContainer = styled.div`
	position: absolute;
	right: 0;
`;

export const SelectContainer = styled.div`
	position: absolute;
	right: 0;
`;

// Community Card
export const CommunityContainer = styled.div`
	display: flex;
	align-items: center;
	margin: 1rem 2rem 0;
	max-height: 30%;
	border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
	transition: transform 0.1s ease;
	cursor: pointer;

	&:hover {
		transform: scale(1.03);
	}

	@media (max-width: 768px) {
		max-height: 25%;
	}
`;

export const QnaType = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 1rem 0;
	width: 15%;
	aspect-ratio: 1;
	background-color: ${({ theme }) => theme.colors.green200};
	border-radius: 50%;
	font-size: 1.5rem;

	@media (max-width: 768px) {
		width: 5rem;
	}
`;

export const TogetherType = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 1rem 0;
	width: 15%;
	aspect-ratio: 1;
	text-align: center;
	background-color: ${({ theme }) => theme.colors.pink200};
	border-radius: 50%;
	font-size: 1.5rem;

	@media (max-width: 768px) {
		width: 5rem;
	}
`;

export const CommunityTitle = styled.p`
	margin: 1rem 6rem 0 3rem;
	font-size: 1.6rem;
`;

export const WriterNickname = styled.p`
	margin: 0.5rem 0 0 3rem;
	font-size: 1rem;
	color: ${({ theme }) => theme.colors.gray300};
`;

export const SearchQna = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 1rem 0;
	width: 10%;
	aspect-ratio: 1;
	background-color: ${({ theme }) => theme.colors.green200};
	border-radius: 50%;
	font-size: 1.8rem;

	@media (max-width: 768px) {
		width: 5rem;
		font-size: 1.5rem;
	}
`;

export const SearchTogether = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 1rem 0;
	width: 10%;
	aspect-ratio: 1;
	background-color: ${({ theme }) => theme.colors.pink200};
	border-radius: 50%;
	font-size: 1.8rem;

	@media (max-width: 768px) {
		width: 5rem;
		font-size: 1.5rem;
	}
`;

export const SearchTitle = styled.div`
	min-width: 50%;
	margin: 1rem 6rem 0 3rem;
	font-size: 2.3rem;

	@media (max-width: 768px) {
		font-size: 1.8rem;
		min-width: 40%;
	}
`;

export const SearchNickname = styled.p`
	text-align: end;
	margin: 1rem 0 0 3rem;
	min-width: 20%;
	font-size: 1.5rem;
	color: ${({ theme }) => theme.colors.gray300};

	@media (max-width: 768px) {
		font-size: 1rem;
		min-width: 20%;
	}
`;

// Review Card
export const ReviewSection = styled.div`
	display: flex;
	margin: 4rem 0;
	width: 100%;
	height: 25rem;
	background-color: ${(props) =>
		props.className === 'one'
			? '#ffffe8'
			: props.className === 'three'
			? '#daebb7'
			: '#FFFFFF'};
	color: ${({ theme }) => theme.colors.text};
	border: none;
	border-radius: 12px;
	word-break: keep-all;
	filter: drop-shadow(0 2px 10px rgb(0, 0, 0, 10%));
	cursor: pointer;
`;

export const ImageContainer = styled.div`
	width: 35%;
	height: 100%;
	overflow: hidden;
	border-radius: 12px 0 0 12px;

	@media (max-width: 768px) {
		width: 40%;
	}
`;

export const ReviewImage = styled.img`
	width: 100%;
	height: 100%;
	border: none;
	transform: translateX(-1.5rem);

	@media (max-width: 768px) {
		width: auto;
		height: 100%;
		transform: translateX(-3.5rem);
	}
`;

export const ReviewContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 2.5% 2rem;
	width: 60%;
`;

export const ReviewTitle = styled.h2`
	min-height: 20%;
	font-size: 2rem;

	@media (max-width: 768px) {
		min-height: 25%;
	}
`;

export const Nickname = styled.p`
	margin-top: 0;
	padding: 0.5rem 1rem;
	font-size: 1.2rem;
	text-align: center;
	width: fit-content;
	min-width: 15%;
	border-radius: 12px;
	background-color: ${(props) =>
		props.className === 'three' ? '#ffffe8' : '#dde7f6'};
	color: ${(props) => (props.className === 'three' ? '#202020' : '#202020')};
`;

export const ReviewContent = styled.p`
	font-size: 1.4rem;
	color: ${({ theme }) => theme.colors.text};
`;

// volunteer card
export const VolunteerSection = styled.div`
	margin-bottom: 6rem;
	width: 100%;
	padding-bottom: 3rem;
	background-color: #ffffff;
	border: none;
	border-radius: 12px;
	filter: drop-shadow(0 2px 10px rgb(0, 0, 0, 10%));
	word-break: keep-all;
	cursor: pointer;
`;

export const VolunteerImgContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin-bottom: 0;
`;

export const VolunteerImage = styled.img`
	width: 100%;
	aspect-ratio: 4/3;
	border: none;
	border-radius: 12px 12px 0 0;
`;

export const RecruitStatus = styled.div`
	width: 25%;
	text-align: center;
	background-color: ${(props) =>
		props.className === '모집중' ? '#202020' : '#FF5A72'};
	color: #ffffff;
	font-size: 1.2rem;
	border: none;
	border-radius: 0 0 4px 4px;
`;

export const VolunteerIntroContainer = styled.div`
	margin: 1.5rem;
`;

export const VolunteerTitle = styled.div`
	margin-bottom: 1.5rem;
	font-size: 1.7rem;
	font-weight: 800;
	min-height: 5rem;
`;

export const VolunteerContent = styled.p`
	margin-top: 0;
	font-size: 1.3rem;
	color: ${({ theme }) => theme.colors.gray600};
`;

// team card

export const TeamCardSection = styled.div`
	margin-bottom: 6rem;
	width: 30rem;
	height: 40rem;
	background-color: #ffffff;
	filter: drop-shadow(0 2px 10px rgb(0, 0, 0, 10%));
	border-radius: 12px;
	word-break: keep-all;
	cursor: pointer;

	@media (max-width: 768px) {
		width: 100%;
	}

	@media (max-width: 450px) {
		width: 100%;
		height: 35rem;
	}
`;

export const TeamImageContainer = styled.div`
	margin: 2.5rem;
	overflow: hidden;
`;

export const TeamImage = styled.img`
	width: 100%;
	aspect-ratio: 1;
`;

export const TeamMainContainer = styled.div`
	margin: 0 2.5rem 2.5rem;
`;

export const TeamName = styled.div`
	font-size: 1.5rem;
	text-align: start;
`;

export const TeamDescContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (max-width: 450px) {
		flex-direction: column;
		align-items: start;
	}
`;

export const WriteDate = styled.p`
	font-size: 1.2rem;
	color: #d3d3d3;
`;

export const TeamUserNickname = styled.p`
	font-size: 1.2rem;
	color: #202020;

	@media (max-width: 768px) {
		margin-top: 0;
	}
`;

export const TeamButtonContainer = styled.div`
	margin-bottom: 3rem;
	display: flex;
	justify-content: center;
`;

export const AcceptButton = styled.button`
	margin-right: 1.5rem;
	width: 5rem;
	height: 3rem;
	border-radius: 6px;
	border: none;
	background-color: #aacb73;
	font-size: 1.2rem;
	cursor: pointer;
`;

export const RefuseButton = styled.button`
	width: 5rem;
	height: 3rem;
	border-radius: 6px;
	border: none;
	background-color: #ffd4d4;
	font-size: 1.2rem;
	cursor: pointer;
`;

export const VolunteerBadge = styled(Badge)`
	background: ${hexToRgba('#FF5A72', 0.8)};

	${({ statusName }) =>
		(statusName === VolunteerTypes.COMPLETED ||
			statusName === VolunteerTypes.DISCONTINUE) &&
		css`
			background: ${hexToRgba('#202020', 0.8)};
		`};

	white-space: pre-line;
	line-height: 1;
`;

export const Label = styled.div`
	background: ${hexToRgba('#202020', 0.8)};
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	height: 3rem;
	width: 16rem;
	left: 0.2;
	bottom: 0;
	border-radius: ${({ theme }) => theme.radius.s1};

	img {
		margin-left: 0.5rem;
		width: 2rem;
		height: 2rem;
	}

	p {
		text-align: left;
		margin-left: 1rem;
		color: ${({ theme }) => theme.colors.background};
		font-size: ${({ theme }) => theme.typography.size.subparagraph};
		word-break: normal;
	}
`;

export const TitleInfo = styled.h2`
	font-size: 2.4rem;
	line-height: 120%;
	margin-top: 2rem;
	margin-bottom: 2rem;
	min-height: 5rem;
	color: ${({ theme }) => theme.colors.text};

	@media (max-width: 768px) {
		font-size: 2rem;
	}
`;

export const InfoBox = styled.div<CardProps>`
	font-size: 0.875rem;
	line-height: 1.5rem;
	display: flex;
	justify-content: space-between;
	align-items: center;

	b {
		text-align: right;
		margin-left: 0.5rem;
		font-size: ${({ theme }) => theme.typography.size.default};
		font-weight: ${({ theme }) => theme.typography.weight.bold};

		${({ statusName }) =>
			statusName === VolunteerTypes.CONTINUE &&
			css`
				color: ${({ theme }) => theme.colors.highlight};
			`}

		${({ statusName }) =>
			(statusName === VolunteerTypes.COMPLETED ||
				statusName === VolunteerTypes.DISCONTINUE) &&
			css`
				color: ${({ theme }) => theme.colors.gray500};
			`}
      
    @media (max-width: 768px) {
			font-size: 1.5rem;
		}
	}
`;

export const VolunteerUserInfo = styled(UserInfo)`
	margin-top: 0;
	margin-right: 0.5rem;

	@media (max-width: 768px) {
		font-size: 1.5rem;
	}
`;

// UserCard

export const UserSection = styled.div`
	margin-bottom: 6rem;
	width: 100%;
	height: 35rem;
	padding-bottom: 3rem;
	background-color: #ffffff;
	border: none;
	border-radius: 12px;
	filter: drop-shadow(0 2px 10px rgb(0, 0, 0, 10%));
	word-break: keep-all;
	cursor: pointer;
`;

export const NickNameContainer = styled.div`
	display: flex;
	justify-content: center;
`;

export const AuthImage = styled.img`
	width: 10%;
	aspect-ratio: 1;
`;

export const UserNickName = styled.h2`
	margin: 1rem 0.5rem 1.5rem;
	font-size: 1.8rem;
	font-weight: 800;
`;

export const UserEmail = styled.p`
	margin-top: 0;
	font-size: 1.3rem;
	color: ${({ theme }) => theme.colors.gray500};
`;

export const UserPhone = styled.p`
	margin-top: 0.5rem;
	font-size: 1.3rem;
	color: ${({ theme }) => theme.colors.gray500};
`;
