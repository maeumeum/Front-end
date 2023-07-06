import styled from 'styled-components';

export const PageContainer = styled.div`
	margin-bottom: 40rem;
	margin-top: 0;
	width: 100%;
`;

export const MenuBar = styled.div`
	width: 10%;
	min-width: 15.7rem;
	margin: -7rem 0 0 10rem;
	@media (max-width: 768px) {
		width: 100%;
		position: absolute;
		margin-left: 0;
		top: 45rem;
		left: 0;

		&:after {
			content: '';
			position: absolute;
			left: -20rem;
			right: 0rem;
			top: 8rem; // 원하는 위치에 따라 이 값을 변경할 수 있습니다.
			height: 1px;
			background: ${({ theme }) => theme.colors.gray300};

			@media (max-width: 360px) {
				left: -10rem;
				right: 0rem;
			}
		}
	}

	@media (max-width: 360px) {
		width: 100%;
		margin-left: 0;
		top: 37rem;
	}
`;

export const MainContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.pink200};
`;

export const QuestionMainContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.yellow100};
`;

export const FFImageArea = styled.img`
	width: 33%;
	margin-left: auto;
`;

export const TextArea = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-left: 25rem;
	margin-top: 3rem;

	@media (max-width: 768px) {
		margin-left: 10rem;
	}
`;

export const MiddleContainer = styled.div`
	display: block;
	margin-left: 25rem;
	margin-bottom: 10rem;
	width: 80%;
	@media (max-width: 768px) {
		margin-left: -15rem;
		margin-top: 20rem;
	}
	@media (max-width: 360px) {
		margin-top: 15rem;
		width: 100%;
	}
`;

export const BigText = styled.p`
	font-size: 5rem;
	letter-spacing: 0.3rem;
	color: #313739;
	margin-left: 25rem;
	@media (max-width: 360px) {
		font-size: 3rem;
	}
`;

export const Sub = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 25rem;
	p {
		font-size: ${({ theme }) => theme.typography.size.default};
		margin-top: -2rem;
		letter-spacing: 0.2rem;

		@media (max-width: 360px) {
			font-size: 1rem;
			line-height: 3rem;
		}
	}
`;

export const FfHighLight = styled.span`
	background-color: #d2f3ff;
`;

export const MainTitle = styled.p`
	font-size: 7rem;
	text-align: left;
	color: #313739;
	margin: 0;
	margin-bottom: 5rem;
	@media (max-width: 768px) {
		font-size: 6rem;
	}
	@media (max-width: 360px) {
		font-size: 4rem;
	}
`;

export const Subtitle = styled.p`
	font-size: 2.5rem;
	text-align: left;
	margin: 0;
	line-height: 5rem;
	@media (max-width: 768px) {
		font-size: 2rem;
		line-height: 3rem;
	}
	@media (max-width: 360px) {
		font-size: 1rem;
		margin-top: -4rem;
		line-height: 2.2rem;
	}
`;

export const Highlight = styled.span`
	background-color: ${({ theme }) => theme.colors.pink200};
`;

export const NumberWriteContainer = styled.div`
	display: flex;
	justify-content: end;
	width: 100%;
	margin: 5.8rem auto;
	@media (max-width: 360px) {
		width: 100%;
	}
`;

export const ReviewPageContainer = styled.div`
	margin-bottom: 40rem;
`;

export const DetailContainer = styled.div`
	margin: 0 auto;
	margin-top: 15rem;
	min-height: 60rem;
	width: 100%;
`;

export const Header = styled.header`
	margin: 0 auto;
	width: 112rem;
	@media (max-width: 768px) {
		width: 90%;
	}
`;

export const Title = styled.p`
	font-size: 3.2rem;
	line-height: 3.9rem;
`;

export const SubContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const InfoBox = styled.div``;

export const NameBox = styled.div`
	display: flex;
	align-items: center;
`;

export const UserName = styled.p`
	font-size: ${({ theme }) => theme.typography.size.default};
	margin-right: 1rem;
`;

export const NanoId = styled.p`
	font-size: ${({ theme }) => theme.typography.size.paragraph};
	color: ${({ theme }) => theme.colors.gray500};
`;

export const Date = styled.p`
	${({ theme }) => theme.colors.gray500}
	font-size: 1.6rem;
`;

export const Btn = styled.button`
	background-color: ${({ theme }) => theme.colors.green200};
	border-radius: 10%;
	border: none;
	height: 5rem;
	width: 10rem;
	margin: 2rem -5rem 0 60rem;
	cursor: pointer;
	font-size: ${({ theme }) => theme.typography.size.default};
	color: ${({ theme }) => theme.colors.background};

	&:hover {
		background-color: ${({ theme }) => theme.colors.green300};
	}
	@media (max-width: 768px) {
		margin-right: 2rem;
		font-size: 1.5rem;
	}
	@media (max-width: 360px) {
		margin-left: -1rem;
		width: 8rem;
	}
`;

export const BtnDelete = styled.button`
	background-color: ${({ theme }) => theme.colors.pink200};
	border-radius: 10%;
	border: none;
	height: 5rem;
	width: 10rem;
	margin-top: 2rem;
	cursor: pointer;
	font-size: ${({ theme }) => theme.typography.size.default};
	color: ${({ theme }) => theme.colors.background};

	&:hover {
		background-color: ${({ theme }) => theme.colors.pink300};
	}
	@media (max-width: 768px) {
		font-size: 1.5rem;
	}
	@media (max-width: 360px) {
		margin-left: -8rem;
		width: 8rem;
	}
`;

export const Line = styled.hr`
	width: 112rem;
	border: 1px solid #afcd81;
	@media (max-width: 768px) {
		width: 90%;
	}
`;

export const ContentContainer = styled.div`
	width: 112rem;
	margin: 0 auto;
	margin-top: 10rem;
	@media (max-width: 768px) {
		width: 90%;
	}
`;

export const Image = styled.img`
	max-width: 100%;
	height: auto;
`;

export const Content = styled.div`
	font-size: 2rem;
	line-height: 5rem;
	border-radius: 0.7rem;
`;

export const Container = styled.div`
	display: block;
	position: relative;
	width: 112rem;
	margin: 0 auto;
	@media (max-width: 768px) {
		width: 100%;
		margin-left: -3rem;
	}
`;

export const ImageArea = styled.label`
	display: inline-block;
	padding: 8px 16px;
	text-align: center;
	background-color: ${({ theme }) => theme.colors.pink200};
	color: ${({ theme }) => theme.colors.background};
	border: none;
	border-radius: 4px;
	cursor: pointer;
	width: 20rem;
	font-size: ${({ theme }) => theme.typography.size.default};
	position: absolute;
	top: 70rem;
	left: 9rem;

	input {
		opacity: 0;
		position: absolute;
		top: 0;
		left: 0;
		cursor: pointer;
	}
	@media (max-width: 768px) {
		top: 75rem;
	}
`;

export const BtnReport = styled.button`
	background-color: inherit;
	border-radius: 3.3rem;
	border: none;
	height: 6.6rem;
	width: 13rem;
	margin-top: 2rem;
	cursor: pointer;
	font-size: ${({ theme }) => theme.typography.size.default};
	color: #ff9c9c;
`;

export const SearchContainer = styled.div`
	display: flex;
`;

export const BottomArea = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-left: 15rem;
	@media (max-width: 768px) {
		margin-left: 3rem;
		margin-top: -10rem;
		width: 100%;
	}
`;
export const CationContnet = styled.p`
	font-size: 2rem;
	color: ${({ theme }) => theme.colors.gray600};
	position: absolute;
	top: 68rem;
	left: 36rem;
`;
