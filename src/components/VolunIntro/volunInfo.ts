import styled from 'styled-components';

export const Title = styled.h1`
	font-size: 3.6rem;
	word-break: keep-all;
	@media (max-width: 768px) {
		font-size: 3rem;
	}
	@media (max-width: 360px) {
		font-size: 2.5rem;
	}
`;

export const IntroContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	margin: 8rem auto;

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
	}

	@media (max-width: 360px) {
		flex-direction: column;
		align-items: flex-start;
		width: 50rem;
		margin-left: 2.3rem;
	}
`;

export const ImgContainer = styled.div`
	height: 48rem;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	img {
		width: 100%;
		height: 40rem;
	}
`;

export const TeamInfo = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 8rem;

	@media (max-width: 768px) {
		margin-left: 5rem;
		/* width: 55%; */
	}

	@media (max-width: 360px) {
		margin-left: 3rem;
		width: 80%;
		height: 60%;
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

	@media (max-width: 768px) {
		font-size: 10px;
	}
`;

export const ApplyBox = styled.div`
	display: flex;
	align-items: center;
	img {
		margin-right: 5px;
	}

	h1 {
		@media (max-width: 360px) {
			font-size: 2.5rem;
		}
	}
`;
