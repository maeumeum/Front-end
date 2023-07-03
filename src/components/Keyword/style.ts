import styled from 'styled-components';

export const KeywordContainer = styled.div`
	margin: 3rem 40rem 12rem;
	min-width: 112rem;
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	column-gap: 3rem;
	row-gap: 5rem;

	@media (max-width: 768px) {
		grid-template-columns: repeat(3, 1fr);
		column-gap: 2rem;
		row-gap: 1rem;
		margin: 3rem 2rem 6rem;
		min-width: 33rem;
	}
`;

export const KeyWordTitle = styled.h1`
	margin: 6rem 40rem 3rem;
	min-width: 112rem;
	font-size: 2.5rem;

	@media (max-width: 768px) {
		margin: 3rem 2rem 6rem;
		min-width: 33rem;
	}
`;

export const KeywordBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	aspect-ratio: 1;
`;

export const KeywordImage = styled.img`
	width: 100%;
	border-radius: 50%;
	aspect-ratio: 1;
	transition: transform 0.1s ease;
	cursor: pointer;

	&:hover {
		transform: scale(1.03);
	}

	@media (max-width: 768px) {
		font-size: 1.5rem;
	}
`;

export const Keyword = styled.p`
	margin-top: 1rem;
	font-size: 2rem;
	color: ${({ theme }) => theme.colors.text};

	@media (max-width: 768px) {
		font-size: 1.8rem;
	}
`;
