import styled from 'styled-components';

export const Title = styled.h1`
	font-size: 3.6rem;
	word-break: keep-all;
`;

export const IntroContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 112rem;
	margin: 8rem auto;

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: flex-start;
	}
`;

export const ImgContainer = styled.div`
	width: 50%;
	height: 48rem;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	img {
		width: 100%;
		height: 40rem;

		@media (max-width: 768px) {
			width: 90%;
			height: 40rem;
			margin-left: 7rem;
		}
	}
`;

export const TeamInfo = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 8rem;

	@media (max-width: 768px) {
		margin-left: 3rem;
		width: 55%;
	}
`;

export const ButtonContainer = styled.div`
	margin-top: 3rem;

	button {
		@media (max-width: 768px) {
			width: 100%;
			height: 40px;
			font-size: 14px;
		}
	}
`;

export const Line = styled.div`
	width: 100%;
	height: 7px;
	border-radius: 5%;
	background: linear-gradient(to right, #f08b7a, var(--button--color));
`;

export const Divider = styled.div`
	width: 100%;
	height: 1px;
	background-color: #afcd81;
`;

export const InfoBox = styled.div`
	background-color: #f5f5f4;
	border-radius: 5%;
	margin-top: 5%;
	padding: 2rem;
	p {
		font-size: 1.5rem;
	}
`;

export const ApplyBox = styled.div`
	display: flex;
	align-items: center;
	img {
		margin-right: 5px;
	}
`;
