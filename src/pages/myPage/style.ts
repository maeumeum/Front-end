import styled from 'styled-components';

export const TeamForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 7rem;
	width: 112rem;

	@media (max-width: 768px) {
		align-items: flex-start;
		margin-left: 5rem;
	}
`;

export const TopTitle = styled.h2`
	margin: 2rem auto 2.5rem;
	font-size: 2.8rem;
`;

export const Title = styled.h2`
	margin: 10rem auto 2.5rem;
	font-size: 2.8rem;
`;

export const TeamType = styled.p`
	font-size: 2rem;
`;

export const TeamTypeRadio = styled.input`
	margin-right: 1.5rem;
	width: 1.8rem;
	height: 1.8rem;
	font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

export const MainContainer = styled.div``;

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 3rem;

	button {
		@media (max-width: 768px) {
			width: 50rem;
			height: 5rem;
		}
	}
`;

export const WaitMessage = styled.div`
	margin-bottom: 5rem;
	padding: 2rem;
	border-radius: 5%;
	background-color: #ffffe8;
`;

export const InfoMessage = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	img {
		width: 40rem;
		height: 40rem;
	}
`;
